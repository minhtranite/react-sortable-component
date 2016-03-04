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

var SortableItems = (function (_React$Component) {
  _inherits(SortableItems, _React$Component);

  function SortableItems() {
    var _this = this;

    _classCallCheck(this, SortableItems);

    _get(Object.getPrototypeOf(SortableItems.prototype), 'constructor', this).apply(this, arguments);

    this.componentWillMount = function () {
      _this.handleProps(_this.props);
    };

    this.componentWillReceiveProps = function (nextProps) {
      _this.handleProps(nextProps);
    };

    this.handleProps = function (props) {
      if (!props.children) {
        throw new Error('SortableItems must contain at least one SortableItem');
      }

      var children = props.children;
      if (!Array.isArray(children)) {
        children = [children];
      }

      var keys = children.map(function (child, index) {
        return index;
      });

      _this.setState({
        keys: keys
      });
    };

    this.handleDragStart = function (sortKey) {
      _this.dragKey = sortKey;
    };

    this.handleDrop = function (sortKey) {
      var result = _this.props.sort(_this.props.items || _this.state.keys, _this.dragKey, sortKey);
      if (typeof result.then !== 'function') {
        if (_this.props.onSort) {
          _this.props.onSort(result);
        }
      } else {
        result.then(function (items) {
          if (_this.props.onSort) {
            _this.props.onSort(items);
          }
        });
      }
    };

    this.handleDragEnd = function () {
      _this.dragKey = undefined;
    };
  }

  _createClass(SortableItems, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      if (!Array.isArray(children)) {
        children = [children];
      }
      var newChildren = children.map(function (child, index) {
        return _react2['default'].cloneElement(child, {
          name: _this2.props.name,
          sortKey: index,
          draggable: child.props.draggable,
          onDragStart: _this2.handleDragStart,
          onDragOver: _this2.handleDragOver,
          onDragEnter: _this2.handleDragEnter,
          onDragLeave: _this2.handleDragLeave,
          onDrop: _this2.handleDrop,
          onDragEnd: _this2.handleDragEnd
        });
      });
      var className = 'sortable-items' + (this.props.className ? ' ' + this.props.className : '');
      return _react2['default'].createElement(this.props.rootComponentType, { className: className }, newChildren);
    }
  }], [{
    key: 'propTypes',
    value: {
      rootComponentType: _react2['default'].PropTypes.any,
      name: _react2['default'].PropTypes.string.isRequired,
      items: _react2['default'].PropTypes.array,
      sort: _react2['default'].PropTypes.func,
      onSort: _react2['default'].PropTypes.func,
      children: _react2['default'].PropTypes.node.isRequired,
      className: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      rootComponentType: 'div',
      sort: function sort(items, from, to) {
        if (from === undefined || to === undefined) {
          return items;
        }
        var cloneItems = items.slice(0);
        cloneItems.splice(to, 0, cloneItems.splice(from, 1)[0]);
        return cloneItems;
      }
    },
    enumerable: true
  }]);

  return SortableItems;
})(_react2['default'].Component);

exports['default'] = SortableItems;
module.exports = exports['default'];