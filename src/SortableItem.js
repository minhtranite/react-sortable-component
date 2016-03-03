import React from 'react';
import ClassNames from 'classnames';

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
    e.stopPropagation();
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', '');
    window.currentSortGroup = this.props.name;
    if (this.props.onDragStart) {
      this.props.onDragStart(this.props.sortKey);
    }
  };

  handleDragOver = (e)=> {
    e.preventDefault();
    if (window.currentSortGroup !== this.props.name) {
      return;
    }
    if (!this.state.isOver) {
      this.setState({
        isOver: true
      });
    }
    e.dataTransfer.dropEffect = 'move';
    if (this.props.onDragOver) {
      this.props.onDragOver(this.props.sortKey);
    }
  };

  handleDragEnter = () => {
    if (window.currentSortGroup !== this.props.name) {
      return;
    }
    this.setState({
      isOver: true
    });
    if (this.props.onDragEnter) {
      this.props.onDragEnter(this.props.sortKey);
    }
  };

  handleDragLeave = () => {
    if (window.currentSortGroup !== this.props.name) {
      return;
    }
    this.setState({
      isOver: false
    });
    if (this.props.onDragLeave) {
      this.props.onDragLeave(this.props.sortKey);
    }
  };

  handleDrop = () => {
    if (window.currentSortGroup !== this.props.name) {
      return;
    }
    this.setState({
      isOver: false
    });
    if (this.props.onDrop) {
      this.props.onDrop(this.props.sortKey);
    }
  };

  handleDragEnd = () => {
    if (window.currentSortGroup !== this.props.name) {
      return;
    }
    if (this.props.onDragEnd) {
      this.props.onDragEnd(this.props.sortKey);
    }
  };

  render() {
    let classObj = {
      'sortable-item': true,
      'sortable-item-over': this.state.isOver
    };
    if (this.props.className) {
      classObj[this.props.className] = true;
    }
    let className = ClassNames(classObj);
    return React.createElement(
      this.props.rootComponentType,
      {
        className,
        draggable: this.props.draggable,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd
      },
      this.props.children
    );
  }
}

export default SortableItem;


