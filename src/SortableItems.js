import React from 'react';
import classnames from 'classnames';

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

    let keys = children.map((child, index) => index);

    this.setState({
      keys: keys
    });
  };

  handleDragStart = (sortKey) => {
    this.dragKey = sortKey;
  };

  handleDrop = (sortKey) => {
    let {sort, items, onSort} = this.props;
    let {keys} = this.state;
    let result = sort(items || keys, this.dragKey, sortKey);
    if (typeof result.then !== 'function') {
      if (onSort) {
        onSort(result);
      }
    } else {
      result.then((response) => {
        if (onSort) {
          onSort(response);
        }
      });
    }
  };

  handleDragEnd = ()=> {
    this.dragKey = undefined;
  };

  render() {
    let {children, className, rootComponentType} = this.props;
    if (!Array.isArray(children)) {
      children = [children];
    }
    let newChildren = children.map((child, index) => {
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
    });
    className = classnames('sortable-items', className).trim();
    return React.createElement(rootComponentType, {className}, newChildren);
  }
}

export default SortableItems;
