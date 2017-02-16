---
order: 0
title: 图标
---

图标，很多图标，非常多图标..... 其实就这么几个

```js
import { Row, Col, Icon } from 'mystique-react'
import './icon.css'

ReactDOM.render(
  <Row>{
    Icon.iconNames.map(name => (
      <Col span={3} key={name} className="icon-demo-col">
        <Icon name={name}/>
        {name}
      </Col>
    ))
  }</Row>,
  mountNode
)
```
