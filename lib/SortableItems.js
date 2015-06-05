'use strict';

var React = require('react');

var SortableItems = React.createClass({
  displayName: 'SortableItems',

  propTypes: {
    items: React.PropTypes.array,
    onSort: React.PropTypes.func,
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
  },
  componentWillMount: function componentWillMount() {
    this.handleProps(this.props);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.handleProps(nextProps);
  },
  handleProps: function handleProps(props) {
    if (!props.children) {
      throw new Error('SortableItems must contain at least one SortableItem');
    }

    var children = props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }

    var keys = children.map(function (c, i) {
      return i;
    });

    this.setState({
      keys: keys
    });
  },
  handleDragStart: function handleDragStart(sortKey) {
    this.dragKey = sortKey;
  },
  handleDrop: function handleDrop(sortKey) {
    var items = this.sort(this.props.items || this.state.keys, this.dragKey, sortKey);
    if (this.props.onSort) {
      this.props.onSort(items);
    }
  },
  handleDragEnd: function handleDragEnd() {
    this.dragKey = undefined;
  },
  sort: function sort(items, from, to) {
    if (from === undefined || to === undefined) {
      return items;
    }
    var cloneItems = items.slice(0);
    cloneItems.splice(to, 0, cloneItems.splice(from, 1)[0]);
    return cloneItems;
  },
  render: function render() {
    var children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    var newChildren = children.map((function (child, index) {
      return React.cloneElement(child, {
        sortKey: index,
        draggable: child.props.draggable,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd
      });
    }).bind(this));
    var className = 'sortable-items' + (this.props.className ? ' ' + this.props.className : '');
    return React.createElement(
      'div',
      { className: className },
      newChildren
    );
  }
});

module.exports = SortableItems;