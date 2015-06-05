var React = require('react');
var ClassNames = require('classnames');

var SortableItem = React.createClass({
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
  getDefaultProps: function () {
    return {
      draggable: true
    };
  },
  getInitialState: function () {
    return {
      isOver: false
    };
  },
  handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', '');
    if (this.props.onDragStart) {
      this.props.onDragStart(this.props.sortKey);
    }
  },
  handleDragOver(e) {
    e.preventDefault();
    if (!this.state.isOver) {
      this.setState({
        isOver: true
      });
    }
    e.dataTransfer.dropEffect = 'move';
    if (this.props.onDragOver) {
      this.props.onDragOver(this.props.sortKey);
    }
  },
  handleDragEnter() {
    this.setState({
      isOver: true
    });
    if (this.props.onDragEnter) {
      this.props.onDragEnter(this.props.sortKey);
    }
  },
  handleDragLeave() {
    this.setState({
      isOver: false
    });
    if (this.props.onDragLeave) {
      this.props.onDragLeave(this.props.sortKey);
    }
  },
  handleDrop(e) {
    e.stopPropagation();
    this.setState({
      isOver: false
    });
    if (this.props.onDrop) {
      this.props.onDrop(this.props.sortKey);
    }
  },
  handleDragEnd() {
    if (this.props.onDragEnd) {
      this.props.onDragEnd(this.props.sortKey);
    }
  },
  render: function () {
    var classObj = {
      'sortable-item': true,
      'sortable-item-over': this.state.isOver
    };
    if (this.props.className) {
      classObj[this.props.className] = true;
    }
    var className = ClassNames(classObj);
    return (
      <div className={className} draggable={this.props.draggable}
        onDragStart={this.handleDragStart} onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop} onDragEnd={this.handleDragEnd}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SortableItem;
