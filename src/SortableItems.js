import React from 'react';

class SortableItems extends React.Component {
  static propTypes = {
    rootComponentType: React.PropTypes.any,
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.array,
    sort: React.PropTypes.func,
    onSort: React.PropTypes.func,
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
  };

  static defaultProps = {
    rootComponentType: 'div',
    sort: (items, from, to) => {
      if (from === undefined || to === undefined) {
        return items;
      }
      let cloneItems = items.slice(0);
      cloneItems.splice(to, 0, cloneItems.splice(from, 1)[0]);
      return cloneItems;
    }
  };

  componentWillMount = () => {
    this.handleProps(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    this.handleProps(nextProps);
  };

  handleProps = (props) => {
    if (!props.children) {
      throw new Error('SortableItems must contain at least one SortableItem');
    }

    let children = props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }

    let keys = children.map(function (child, index) {
      return index;
    });

    this.setState({
      keys: keys
    });
  };

  handleDragStart = (sortKey) => {
    this.dragKey = sortKey;
  };

  handleDrop = (sortKey) => {
    let result = this.props.sort(this.props.items || this.state.keys, this.dragKey, sortKey);
    if (typeof result.then !== 'function') {
      if (this.props.onSort) {
        this.props.onSort(result);
      }
    } else {
      result.then((items) => {
        if (this.props.onSort) {
          this.props.onSort(items);
        }
      });
    }
  };

  handleDragEnd = ()=> {
    this.dragKey = undefined;
  };

  render() {
    let children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    let newChildren = children.map(function (child, index) {
      return React.cloneElement(child, {
        name: this.props.name,
        sortKey: index,
        draggable: child.props.draggable,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd
      });
    }.bind(this));
    let className = 'sortable-items' + (this.props.className ? (' ' + this.props.className) : '');
    return React.createElement(
      this.props.rootComponentType, {className}, newChildren);
  }
}

export default SortableItems;
