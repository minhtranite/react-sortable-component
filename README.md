# React Sortable Component

A simple sortable component for ReactJS.

## Installation

```bash
npm install --save react-sortable-component
```

## Usage

### JS

```js
var {SortableItems, SortableItem} = require('react-sortable-component');
...
state = {
  items: [
    {src: 'http://lorempixel.com/400/400/sports/1'},
    {src: 'http://lorempixel.com/400/400/sports/2'},
    {src: 'http://lorempixel.com/400/400/sports/3'},
    {src: 'http://lorempixel.com/400/400/sports/4'},
    {src: 'http://lorempixel.com/400/400/sports/5'},
    {src: 'http://lorempixel.com/400/400/sports/6'}
  ]
};

handleSort = (items) => {
  this.setState({
    items: items
  });
};

render() {
  let {items} = this.state;
  return (
    <Document title="Home | React sortable component" className="page-home">
      <SortableItems name="simple-sort"
        className="simple-sort-items"
        items={items}
        onSort={this.handleSort}>
        {
          items.map((item, index) => {
            return (
              <SortableItem key={item.src}
                draggable={index !== 3}
                className="simple-sort-item">
                <LazySizes className="pointer-events-none"
                  dataSrc={item.src}
                  width="126"
                  height="126"/>
              </SortableItem>
            );
          })
        }
      </SortableItems>
    </Document>
  );
}

```

### CSS

**Webpack:**

```js
require('react-sortable-component/lib/sortable.css');
```

**Without Webpack:**

```html
<link rel="stylesheet" type="text/css" href="path/to/react-sortable-component/lib/sortable.css">
```

**or apply your style:**

```scss
[draggable] {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: element;
}

.sortable-items {
  margin-left: -10px;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

.sortable-item {
  height: 150px;
  width: 150px;
  padding: 10px;
  border-radius: 2px;
  float: left;
  margin-left: 10px;
  text-align: center;
  border: 1px solid #DDD;
  background-color: #fff;
  cursor: move;
  .pointer-events-none {
    pointer-events: none;
  }
}

.sortable-item-over {
  border: 1px dashed #DDD;
}

```

### UMD

```html
<link rel="stylesheet" type="text/css" href="path/to/react-sortable-component/dist/react-sortable-component.css">
<script src="path/to//react-sortable-component/dist/react-sortable-component.js"></script>
```

```js
var SortableItems = window.ReactSortableComponent.SortableItems;
var SortableItem = window.ReactSortableComponent.SortableItem;
```

## Props

### SortableItems

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | string | true |  |  |
| rootComponentType | string or ReactClass | false | `div` | EX: `ul` |
| children | node | true | | List of SortableItem |
| items | array | false | | List item need sort. |
| sort | function | false | [See](https://github.com/vn38minhtran/react-sortable-component/blob/master/src/SortableItems.js#L14) |  |
| onSort | function(arg) | false | | Callback when items sorted. If `items` prop is defined then `arg` is sorted items else `arg` is list index of sorted items. |
| className | string | false | | Your custom class name. |

### SortableItem

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| rootComponentType | string or ReactClass | false | `div` | EX: `li` |
| children | node | true | | Sortable item content. |
| draggable | bool | false | true | |
| className | string | false | | Your custom class name. |

## Example

View [demo](http://minhtranite.github.io/react-sortable-component) or example folder.
