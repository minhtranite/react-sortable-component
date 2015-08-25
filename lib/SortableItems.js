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
      var items = _this.props.sort(_this.props.items || _this.state.keys, _this.dragKey, sortKey);
      if (_this.props.onSort) {
        _this.props.onSort(items);
      }
    };

    this.handleDragEnd = function () {
      _this.dragKey = undefined;
    };
  }

  _createClass(SortableItems, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      if (!Array.isArray(children)) {
        children = [children];
      }
      var newChildren = children.map((function (child, index) {
        return _react2['default'].cloneElement(child, {
          name: this.props.name,
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
      return _react2['default'].createElement(
        'div',
        { className: className },
        newChildren
      );
    }
  }], [{
    key: 'propTypes',
    value: {
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