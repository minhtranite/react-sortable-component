var React = require('react');

var SortableItems = React.createClass({
  propTypes: {
    items: React.PropTypes.array,
    onSort: React.PropTypes.func,
    children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string
  },
  componentWillMount: function () {
    this.handleProps(this.props);
  },
  componentWillReceiveProps: function (nextProps) {
    this.handleProps(nextProps);
  },
  handleProps: function (props) {
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
  handleDragStart(sortKey) {
    this.dragKey = sortKey;
  },
  handleDrop(sortKey) {
    var items = this.sort(this.props.items || this.state.keys, this.dragKey, sortKey);
    if (this.props.onSort) {
      this.props.onSort(items);
    }
  },
  handleDragEnd: function () {
    this.dragKey = undefined;
  },
  sort: function (items, from, to) {
    if (from === undefined || to === undefined) {
      return items;
    }
    var cloneItems = items.slice(0);
    cloneItems.splice(to, 0, cloneItems.splice(from, 1)[0]);
    return cloneItems;
  },
  render: function () {
    var children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }
    var newChildren = children.map(function (child, index) {
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
    }.bind(this));
    var className = 'sortable-items' + (this.props.className ? (' ' + this.props.className) : '');
    return (
      <div className={className}>
        {newChildren}
      </div>
    );
  }
});

module.exports = SortableItems;
