import 'babel-core/polyfill';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LazySizes from 'react-lazysizes';
import {SortableItems, SortableItem} from '../src/index';

import './bower_components/bootstrap-customize/css/bootstrap.css';
import '../src/sortable.scss';
import './assets/styles/app.scss';

class App extends React.Component {
  state = {
    items: [
      {src: 'http://lorempixel.com/400/400/sports/1'},
      {src: 'http://lorempixel.com/400/400/sports/2'},
      {src: 'http://lorempixel.com/400/400/sports/3'},
      {src: 'http://lorempixel.com/400/400/sports/4'},
      {src: 'http://lorempixel.com/400/400/sports/5'},
      {src: 'http://lorempixel.com/400/400/sports/6'},
      {src: 'http://lorempixel.com/400/400/sports/7'}
    ]
  };
  handleSort = (items) => {
    this.setState({
      items: items
    });
  };

  render() {
    let items = this.state.items.map(function (item) {
      return (
        <SortableItem key={item.src} className='sort-sample-item'>
          <LazySizes className='pointer-events-none' dataSrc={item.src}
            width='126' height='126'/>
        </SortableItem>
      );
    });
    return (
      <div className={"layout-page"}>
        <Header/>
        <main className={"layout-main"}>
          <div className={"container"}>
            <SortableItems className='sort-sample-items'
              items={this.state.items} onSort={this.handleSort}>
              {items}
            </SortableItems>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

function run() {
  React.render(<App />, document.body);
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
