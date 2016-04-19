import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';
import {SortableItems, SortableItem} from 'react-sortable-component';

class CustomRootPage extends React.Component {
  state = {
    items: [
      {src: 'http://lorempixel.com/400/400/sports/1'},
      {src: 'http://lorempixel.com/400/400/sports/2'},
      {src: 'http://lorempixel.com/400/400/sports/3'},
      {src: 'http://lorempixel.com/400/400/sports/4'},
      {src: 'http://lorempixel.com/400/400/sports/5'},
      {src: 'http://lorempixel.com/400/400/sports/6'}
    ]
  };

  handleSort = (items) => {
    this.setState({
      items: items
    });
  };

  render() {
    let {items} = this.state;
    return (
      <Document title="Custom root | React sortable component"
        className="page-custom-root">
        <SortableItems name="simple-sort"
          className="simple-sort-items"
          items={items}
          onSort={this.handleSort}>
          {
            items.map((item, index) => {
              return (
                <SortableItem key={item.src}
                  draggable={index !== 3}
                  className="simple-sort-item"
                  rootComponentType="ul">
                  <LazySizes className="pointer-events-none"
                    dataSrc={item.src}
                    width="126"
                    height="126"
                    rootComponentType="li"/>
                </SortableItem>
              );
            })
          }
        </SortableItems>
      </Document>
    );
  }
}

export default CustomRootPage;
