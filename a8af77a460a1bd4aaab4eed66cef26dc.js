webpackJsonp([2],{439:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),l=function(t,e,r){for(var o=!0;o;){var n=t,a=e,s=r;o=!1,null===n&&(n=Function.prototype);var l=Object.getOwnPropertyDescriptor(n,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(s)}var c=Object.getPrototypeOf(n);if(null===c)return;t=c,e=a,r=s,o=!0,l=c=void 0}},i=r(192),c=o(i),u=r(427),p=o(u),f=r(428),m=o(f),d=r(433),h=function(t){function e(){var t=this;n(this,e),l(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments),this.state={items:[{src:"http://lorempixel.com/400/400/sports/1"},{src:"http://lorempixel.com/400/400/sports/2"},{src:"http://lorempixel.com/400/400/sports/3"},{src:"http://lorempixel.com/400/400/sports/4"},{src:"http://lorempixel.com/400/400/sports/5"},{src:"http://lorempixel.com/400/400/sports/6"}]},this.handleSort=function(e){t.setState({items:e})}}return a(e,t),s(e,[{key:"render",value:function(){var t=this.state.items;return c["default"].createElement(p["default"],{title:"Custom root | React sortable component",className:"page-custom-root"},c["default"].createElement(d.SortableItems,{name:"simple-sort",className:"simple-sort-items",items:t,onSort:this.handleSort},t.map(function(t,e){return c["default"].createElement(d.SortableItem,{key:t.src,draggable:3!==e,className:"simple-sort-item",rootComponentType:"ul"},c["default"].createElement(m["default"],{className:"pointer-events-none",dataSrc:t.src,width:"126",height:"126",rootComponentType:"li"}))})))}}]),e}(c["default"].Component);e["default"]=h,t.exports=e["default"]}});