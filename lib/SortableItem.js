'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _react2['default'].createElement(this.props.rootComponentType, {
        className: className,
        draggable: this.props.draggable,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd
      }, this.props.children);
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
      className: _react2['default'].PropTypes.string,
      rootComponentType: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      draggable: true,
      rootComponentType: 'div'
    },
    enumerable: true
  }]);

  return SortableItem;
})(_react2['default'].Component);

exports['default'] = SortableItem;
module.exports = exports['default'];