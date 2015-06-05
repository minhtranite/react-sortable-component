var React = require('react');
var LazySizes = require('react-lazysizes');

require('./bower_components/bootstrap-customize/css/bootstrap.css');
require('./assets/styles/app.scss');
require('../src/sortable.scss');

var Header = require('./components/Header');
var Footer = require('./components/Footer');
var {SortableItems, SortableItem} = require('../src/index');

var App = React.createClass({
  getInitialState: function () {
    return {
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
  },
  handleSort: function (items) {
    this.setState({
      items: items
    });
  },
  render: function () {
    var items = this.state.items.map(function (item) {
      return (
        <SortableItem key={item.src} className='sort-sample-item'>
          <LazySizes className='point-events-none' dataSrc={item.src}
            width='126'
            height='126'/>
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
});

React.render(<App />, document.body);

