import React from 'react';
import classnames from 'classnames';

class SortableItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    name: React.PropTypes.string,
    sortKey: React.PropTypes.any,
    draggable: React.PropTypes.bool,
    onDragStart: React.PropTypes.func,
    onDragOver: React.PropTypes.func,
    onDragEnter: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    onDrop: React.PropTypes.func,
    onDragEnd: React.PropTypes.func,
    className: React.PropTypes.string,
    rootComponentType: React.PropTypes.any
  };

  static defaultProps = {
    draggable: true,
    rootComponentType: 'div'
  };

  state = {
    isOver: false
  };

  handleDragStart = (e) => {
    let {name, onDragStart, sortKey} = this.props;
    e.stopPropagation();
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', '');
    window.currentSortGroup = name;
    if (onDragStart) {
      onDragStart(sortKey);
    }
  };

  handleDragOver = (e)=> {
    e.preventDefault();
    let {isOver} = this.state;
    let {name, onDragOver, sortKey} = this.props;
    if (window.currentSortGroup !== name) {
      return;
    }
    if (!isOver) {
      this.setState({
        isOver: true
      });
    }
    e.dataTransfer.dropEffect = 'move';
    if (onDragOver) {
      onDragOver(sortKey);
    }
  };

  handleDragEnter = () => {
    let {name, onDragEnter, sortKey} = this.props;
    if (window.currentSortGroup !== name) {
      return;
    }
    this.setState({
      isOver: true
    });
    if (onDragEnter) {
      onDragEnter(sortKey);
    }
  };

  handleDragLeave = () => {
    let {name, onDragLeave, sortKey} = this.props;
    if (window.currentSortGroup !== name) {
      return;
    }
    this.setState({
      isOver: false
    });
    if (onDragLeave) {
      onDragLeave(sortKey);
    }
  };

  handleDrop = () => {
    let {name, onDrop, sortKey} = this.props;
    if (window.currentSortGroup !== name) {
      return;
    }
    this.setState({
      isOver: false
    });
    if (onDrop) {
      onDrop(sortKey);
    }
  };

  handleDragEnd = () => {
    let {name, onDragEnd, sortKey} = this.props;
    if (window.currentSortGroup !== name) {
      return;
    }
    if (onDragEnd) {
      onDragEnd(sortKey);
    }
  };

  render() {
    let {className, rootComponentType, draggable, children} = this.props;
    let {isOver} = this.state;
    className = classnames('sortable-item', className, {
      'sortable-item-over': isOver
    });
    let props = {
      className,
      draggable: draggable,
      onDragStart: this.handleDragStart,
      onDragOver: this.handleDragOver,
      onDragEnter: this.handleDragEnter,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop,
      onDragEnd: this.handleDragEnd
    };
    return React.createElement(rootComponentType, props, children);
  }
}

export default SortableItem;


