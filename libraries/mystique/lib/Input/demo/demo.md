---
order: 0
title: 输入框
---

输入框就是可以输入文字的框

```js
import { Input, Icon } from 'mystique-react'

ReactDOM.render(
  <div className="buttom-demo">
    <Input defaultValue="123"/>
    <Input defaultValue="123" beforeAddon={<Icon name="user"/>}/>
    <Input defaultValue="lianjia" beforeAddon="http://" afterAddon=".com"/>
  </div>,
  mountNode
)
```
