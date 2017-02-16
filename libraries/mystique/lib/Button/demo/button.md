---
order: 0
title: 按钮
---

按钮，就是一般的按钮，可以设置按钮样式，大小，图标，以及按钮点击的事件。

```js
import { Row, Col, Button } from 'mystique-react'
import './button.css'

const onClick = () => alert('我就知道你会手贱点')
ReactDOM.render(
  <div className="buttom-demo">
    <div><Button>一般的按钮</Button></div>
    <div><Button disabled={true}>不可用按钮</Button></div>
    <div><Button size="large">大个儿按钮</Button></div>
    <div>
      <Button type="border">边框按钮</Button>
      <Button type="primary">填充按钮</Button>
      <Button type="link">连接按钮</Button>
    </div>
    <div><Button icon="success">代图标的按钮</Button></div>
    <div><Button href="http://lianjia.com">跳转按钮</Button></div>
    <div><Button onClick={onClick}>事件回调按钮</Button></div>
  </div>,
  mountNode
)
```
