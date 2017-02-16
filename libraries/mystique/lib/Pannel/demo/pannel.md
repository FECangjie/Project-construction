---
order: 0
title: 基础布局
---

面板，可以展示，收起那部

```js
import { Pannel } from 'mystique-react'

const menus = [{
  key: '1',
  title: '标题1',
  pills: [{
    key: '1.1',
    content: '内容 1.1'
  }, {
    key: '1.2',
    content: '内容 1.2'
  }, {
    key: '1.3',
    content: '内容 1.3'
  }]
}, {
  key: '2',
  title: '标题2',
  pills: [{
    key: '2.1',
    content: '内容 2.1'
  }, {
    key: '2.2',
    content: '内容 2.2'
  }, {
    key: '2.3',
    content: '内容 2.3'
  }]
}, {
  key: '3',
  title: '标题3',
  pills: [{
    key: '3.1',
    content: '内容 3.1'
  }, {
    key: '3.2',
    content: '内容 3.2'
  }, {
    key: '3.3',
    content: '内容 3.3'
  }]
}]

ReactDOM.render(
  <div>
    <Pannel
      menus={menus}
      defaultOpenKeys={['1']}
      defaultSelectKey={'1.2'}
    />
  </div>,
  mountNode
)
```
