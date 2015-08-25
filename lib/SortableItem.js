'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var SortableItem = (function (_React$Component) {
  _inherits(SortableItem, _React$Component);

  function SortableItem() {
    var _this = this;

    _classCallCheck(this, SortableItem);

    _get(Object.getPrototypeOf(SortableItem.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      isOver: false
    };

    this.handleDragStart = function (e) {
      e.stopPropagation();
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', '');
      window.currentSortGroup = _this.props.name;
      if (_this.props.onDragStart) {
        _this.props.onDragStart(_this.props.sortKey);
      }
    };

    this.handleDragOver = function (e) {
      e.preventDefault();
      if (window.currentSortGroup !== _this.props.name) {
        return;
      }
      if (!_this.state.isOver) {
        _this.setState({
          isOver: true
        });
      }
      e.dataTransfer.dropEffect = 'move';
      if (_this.props.onDragOver) {
        _this.props.onDragOver(_this.props.sortKey);
      }
    };

    this.handleDragEnter = function () {
      if (window.currentSortGroup !== _this.props.name) {
        return;
      }
      _this.setState({
        isOver: true
      });
      if (_this.props.onDragEnter) {
        _this.props.onDragEnter(_this.props.sortKey);
      }
    };

    this.handleDragLeave = function () {
      if (window.currentSortGroup !== _this.props.name) {
        return;
      }
      _this.setState({
        isOver: false
      });
      if (_this.props.onDragLeave) {
        _this.props.onDragLeave(_this.props.sortKey);
      }
    };

    this.handleDrop = function () {
      if (window.currentSortGroup !== _this.props.name) {
        return;
      }
      _this.setState({
        isOver: false
      });
      if (_this.props.onDrop) {
        _this.props.onDrop(_this.props.sortKey);
      }
    };

    this.handleDragEnd = function () {
      if (window.currentSortGroup !== _this.props.name) {
        return;
      }
      if (_this.props.onDragEnd) {
        _this.props.onDragEnd(_this.props.sortKey);
      }
    };
  }

  _createClass(SortableItem, [{
    key: 'render',
    value: function render() {
      var classObj = {
        'sortable-item': true,
        'sortable-item-over': this.state.isOver
      };
      if (this.props.className) {
        classObj[this.props.className] = true;
      }
      var className = (0, _classnames2['default'])(classObj);
      return _react2['default'].createElement(
        'div',
        { className: className, draggable: this.props.draggable,
          onDragStart: this.handleDragStart, onDragOver: this.handleDragOver,
          onDragEnter: this.handleDragEnter, onDragLeave: this.handleDragLeave,
          onDrop: this.handleDrop, onDragEnd: this.handleDragEnd },
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node.isRequired,
      name: _react2['default'].PropTypes.string,
      sortKey: _react2['default'].PropTypes.any,
      draggable: _react2['default'].PropTypes.bool,
      onDragStart: _react2['default'].PropTypes.func,
      onDragOver: _react2['default'].PropTypes.func,
      onDragEnter: _react2['default'].PropTypes.func,
      onDragLeave: _react2['default'].PropTypes.func,
      onDrop: _react2['default'].PropTypes.func,
      onDragEnd: _react2['default'].PropTypes.func,
      className: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      draggable: true
    },
    enumerable: true
  }]);

  return SortableItem;
})(_react2['default'].Component);

exports['default'] = SortableItem;
module.exports = exports['default'];