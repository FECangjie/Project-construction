---
order: 0
title: 基础布局
---

从堆叠到水平排列。
使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，
所有列（Col）必须放在 `Row` 内。

```js
import { Row, Col } from 'mystique-react'
import './layout.css'
ReactDOM.render(
  <div>
    <Row className="layout-demo-row">
      <Col span={6} className="layout-demo-col">col-6</Col>
      <Col span={6} className="layout-demo-col">col-6</Col>
    </Row>
    <Row className="layout-demo-row">
      <Col span={4} className="layout-demo-col">col-4</Col>
      <Col span={4} className="layout-demo-col">col-4</Col>
      <Col span={4} className="layout-demo-col">col-4</Col>
    </Row>
    <Row className="layout-demo-row">
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
    </Row>
    <Row className="layout-demo-row">
      <Col span={2} offset={2} className="layout-demo-col">col-2 offset-2</Col>
      <Col span={2} offset={2} className="layout-demo-col">col-2 offset-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
    </Row>
    <Row className="layout-demo-row">
      <Col span={2} offset={6} className="layout-demo-col">col-2 offset-6</Col>
      <Col span={2} className="layout-demo-col">col-2</Col>
    </Row>
  </div>,
  mountNode
)
```
