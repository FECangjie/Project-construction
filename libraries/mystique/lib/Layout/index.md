---
category: components
chinese:  布局
type: Views
english: Layout
---

## description
12格栅格系统

## API

### Row

| 参数        | 说明                                      | 类型        | 默认值 |
|----------- |-----------------------------------------  | ---------- |-------|
| className  | 追加的样式名                                | string     | ""    |


### Col

| 参数        | 说明                                     | 类型        | 默认值 |
|----------- |----------------------------------------  | ---------- |-------|
| className  | 追加的样式名                               | string     | ""    |
| span       | 自身占用格数(0~12)                         | number     | 12    |
| offset     | 自身左侧偏移格数(0~12-span)                | number     | 0     |