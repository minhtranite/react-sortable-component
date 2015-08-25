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
      {src: 'http://lorempixel.com/400/400/sports/6'}
    ],
    nestedItems: [
      {
        id: 'sports',
        name: 'Sports',
        children: [
          {src: 'http://lorempixel.com/400/400/sports/1'},
          {src: 'http://lorempixel.com/400/400/sports/2'},
          {src: 'http://lorempixel.com/400/400/sports/3'},
          {src: 'http://lorempixel.com/400/400/sports/4'},
          {src: 'http://lorempixel.com/400/400/sports/5'},
          {src: 'http://lorempixel.com/400/400/sports/6'}
        ]
      },
      {
        id: 'fashion',
        name: 'Fashion',
        children: [
          {src: 'http://lorempixel.com/400/400/fashion/1'},
          {src: 'http://lorempixel.com/400/400/fashion/2'},
          {src: 'http://lorempixel.com/400/400/fashion/3'},
          {src: 'http://lorempixel.com/400/400/fashion/4'},
          {src: 'http://lorempixel.com/400/400/fashion/5'},
          {src: 'http://lorempixel.com/400/400/fashion/6'}
        ]
      },
      {
        id: 'people',
        name: 'People',
        children: [
          {src: 'http://lorempixel.com/400/400/people/1'},
          {src: 'http://lorempixel.com/400/400/people/2'},
          {src: 'http://lorempixel.com/400/400/people/3'},
          {src: 'http://lorempixel.com/400/400/people/4'},
          {src: 'http://lorempixel.com/400/400/people/5'},
          {src: 'http://lorempixel.com/400/400/people/6'}
        ]
      },
      {
        id: 'nightlife',
        name: 'Nightlife',
        children: [
          {src: 'http://lorempixel.com/400/400/nightlife/1'},
          {src: 'http://lorempixel.com/400/400/nightlife/2'},
          {src: 'http://lorempixel.com/400/400/nightlife/3'},
          {src: 'http://lorempixel.com/400/400/nightlife/4'},
          {src: 'http://lorempixel.com/400/400/nightlife/5'},
          {src: 'http://lorempixel.com/400/400/nightlife/6'}
        ]
      }
    ]
  };

  handleSort = (items) => {
    this.setState({
      items: items
    });
  };

  handleNestedSort = (items) => {
    this.setState({
      nestedItems: items
    });
  };

  handleChildrenSort = (itemId) => {
    return (children) => {
      let nestedItems = this.state.nestedItems;
      let childIndex;
      for (let i = 0; i < nestedItems.length; i++) {
        let item = nestedItems[i];
        if (item.id === itemId) {
          childIndex = i;
          break;
        }
      }
      nestedItems[childIndex].children = children;
      this.setState({
        nestedItems: nestedItems
      });
    };
  };

  render() {
    return (
      <div className={"layout-page"}>
        <Header/>
        <main className={"layout-main"}>
          <div className={"container"}>
            <h2>Simple</h2>
            <hr/>
            <SortableItems name='simple-sort' className='simple-sort-items'
              items={this.state.items} onSort={this.handleSort}>
              {
                this.state.items.map((item, index) => {
                  return (
                    <SortableItem key={item.src} draggable={index !== 3}
                      className='simple-sort-item'>
                      <LazySizes className='pointer-events-none'
                        dataSrc={item.src} width='126' height='126'/>
                    </SortableItem>
                  );
                })
              }
            </SortableItems>

            <h2>Nested</h2>
            <hr/>
            <SortableItems name='nested-sort'
              className='sort-sample-nested-items'
              items={this.state.nestedItems} onSort={this.handleNestedSort}>
              {
                this.state.nestedItems.map((item, index) => {
                  return (
                    <SortableItem key={item.id} className='sort-group-item'>
                      <div className='panel panel-default'>
                        <div className='panel-heading'>
                          <h3 className='panel-title'>{item.name}</h3>
                        </div>
                        <div className='panel-body'>
                          <SortableItems name={'nested-sort-children' + index}
                            items={item.children}
                            onSort={this.handleChildrenSort(item.id)}>
                            {
                              item.children.map((child) => {
                                return (
                                  <SortableItem key={child.src}>
                                    <LazySizes className='pointer-events-none'
                                      dataSrc={child.src} width='126'
                                      height='126'/>
                                  </SortableItem>
                                );
                              })
                            }
                          </SortableItems>
                        </div>
                      </div>
                    </SortableItem>
                  );
                })
              }
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
