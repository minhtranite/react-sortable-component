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
      var _props = _this.props;
      var name = _props.name;
      var onDragStart = _props.onDragStart;
      var sortKey = _props.sortKey;

      e.stopPropagation();
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', '');
      window.currentSortGroup = name;
      if (onDragStart) {
        onDragStart(sortKey);
      }
    };

    this.handleDragOver = function (e) {
      e.preventDefault();
      var isOver = _this.state.isOver;
      var _props2 = _this.props;
      var name = _props2.name;
      var onDragOver = _props2.onDragOver;
      var sortKey = _props2.sortKey;

      if (window.currentSortGroup !== name) {
        return;
      }
      if (!isOver) {
        _this.setState({
          isOver: true
        });
      }
      e.dataTransfer.dropEffect = 'move';
      if (onDragOver) {
        onDragOver(sortKey);
      }
    };

    this.handleDragEnter = function () {
      var _props3 = _this.props;
      var name = _props3.name;
      var onDragEnter = _props3.onDragEnter;
      var sortKey = _props3.sortKey;

      if (window.currentSortGroup !== name) {
        return;
      }
      _this.setState({
        isOver: true
      });
      if (onDragEnter) {
        onDragEnter(sortKey);
      }
    };

    this.handleDragLeave = function () {
      var _props4 = _this.props;
      var name = _props4.name;
      var onDragLeave = _props4.onDragLeave;
      var sortKey = _props4.sortKey;

      if (window.currentSortGroup !== name) {
        return;
      }
      _this.setState({
        isOver: false
      });
      if (onDragLeave) {
        onDragLeave(sortKey);
      }
    };

    this.handleDrop = function () {
      var _props5 = _this.props;
      var name = _props5.name;
      var onDrop = _props5.onDrop;
      var sortKey = _props5.sortKey;

      if (window.currentSortGroup !== name) {
        return;
      }
      _this.setState({
        isOver: false
      });
      if (onDrop) {
        onDrop(sortKey);
      }
    };

    this.handleDragEnd = function () {
      var _props6 = _this.props;
      var name = _props6.name;
      var onDragEnd = _props6.onDragEnd;
      var sortKey = _props6.sortKey;

      if (window.currentSortGroup !== name) {
        return;
      }
      if (onDragEnd) {
        onDragEnd(sortKey);
      }
    };
  }

  _createClass(SortableItem, [{
    key: 'render',
    value: function render() {
      var _props7 = this.props;
      var className = _props7.className;
      var rootComponentType = _props7.rootComponentType;
      var draggable = _props7.draggable;
      var children = _props7.children;
      var isOver = this.state.isOver;

      className = (0, _classnames2['default'])('sortable-item', className, {
        'sortable-item-over': isOver
      });
      var props = {
        className: className,
        draggable: draggable,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragEnd: this.handleDragEnd
      };
      return _react2['default'].createElement(rootComponentType, props, children);
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