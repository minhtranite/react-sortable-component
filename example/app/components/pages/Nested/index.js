import React from 'react';
import Document from 'components/common/Document';
import LazySizes from 'react-lazysizes';
import {SortableItems, SortableItem} from 'react-sortable-component';

class NestedPage extends React.Component {
  state = {
    items: [
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

  handleChildrenSort = (itemId) => {
    return (children) => {
      let items = this.state.items;
      let childIndex;
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id === itemId) {
          childIndex = i;
          break;
        }
      }
      items[childIndex].children = children;
      this.setState({
        items: items
      });
    };
  };

  render() {
    let {items} = this.state;
    return (
      <Document title="Nested | React sortable component"
        className="page-nested">
        <SortableItems name="nested-sort"
          className="sort-sample-nested-items"
          items={items}
          onSort={this.handleSort}>
          {
            items.map((item, index) => {
              return (
                <SortableItem key={item.id} className="sort-group-item">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{item.name}</h3>
                    </div>
                    <div className="panel-body">
                      <SortableItems name={'nested-sort-children' + index}
                        items={item.children}
                        onSort={this.handleChildrenSort(item.id)}>
                        {
                          item.children.map((child) => {
                            return (
                              <SortableItem key={child.src}>
                                <LazySizes className="pointer-events-none"
                                  dataSrc={child.src}
                                  width="126"
                                  height="126"/>
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
      </Document>
    );
  }
}

export default NestedPage;


