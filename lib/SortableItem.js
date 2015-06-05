'use strict';

var React = require('react');
var ClassNames = require('classnames');

var SortableItem = React.createClass({
  displayName: 'SortableItem',

  propTypes: {
    children: React.PropTypes.node.isRequired,
    sortKey: React.PropTypes.any,
    draggable: React.PropTypes.bool,
    onDragStart: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    onDrop: React.PropTypes.func,
    onDragEnd: React.PropTypes.func,
    className: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      draggable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      isOver: false
    };
  },
  handleDragStart: function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', null);
    if (this.props.onDragStart) {
      this.props.onDragStart(this.props.sortKey);
    }
  },
  handleDragOver: function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (this.props.onDragOver) {
      this.props.onDragOver(this.props.sortKey);
    }
  },
  handleDragEnter: function handleDragEnter() {
    this.setState({
      isOver: true
    });
    if (this.props.onDragEnter) {
      this.props.onDragEnter(this.props.sortKey);
    }
  },
  handleDragLeave: function handleDragLeave() {
    this.setState({
      isOver: false
    });
    if (this.props.onDragLeave) {
      this.props.onDragLeave(this.props.sortKey);
    }
  },
  handleDrop: function handleDrop(e) {
    e.stopPropagation();
    this.setState({
      isOver: false
    });
    if (this.props.onDrop) {
      this.props.onDrop(this.props.sortKey);
    }
  },
  handleDragEnd: function handleDragEnd() {
    if (this.props.onDragEnd) {
      this.props.onDragEnd(this.props.sortKey);
    }
  },
  render: function render() {
    var classObj = {
      'sortable-item': true,
      'sortable-item-over': this.state.isOver
    };
    if (this.props.className) {
      classObj[this.props.className] = true;
    }
    var className = ClassNames(classObj);
    return React.createElement(
      'div',
      { className: className, draggable: this.props.draggable,
        onDragStart: this.handleDragStart, onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter, onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop, onDragEnd: this.handleDragEnd },
      this.props.children
    );
  }
});

module.exports = SortableItem;