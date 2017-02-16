---
category: components
chinese: 按钮
type: Views
english: Button
---

## API

| 参数        | 说明                                    | 类型        | 默认值   |
|----------- |---------------------------------------  | ---------- |--------- |
| className  | 追加的样式名                              | string     | ""       |
| type       | 按钮类型 [normal, border, primary, link] | string     | "normal" |
| size       | 按钮大小 [normal, large]                 | string     | "normal" |
| icon       | icon 名称 详见Icon                       | string     | -        |
| disabled   | 按钮是否不可用                            | boolean    |  false   |
| href       | 点击跳转地址                             | string      | -       |
| onClick    | 点击事件 (如果 href, onClick同时存在忽略href) | function | -       |
