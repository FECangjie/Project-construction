---
category: components
chinese:  表格
type: Views
english: Table
---

## API

| 参数        | 说明                                           | 类型        | 默认值    |
|----------- |----------------------------------------------- | ---------- |---------- |
| className  | 追加的样式名                                     | string     | ""        |
| type       | 表格样式(striped: 不带分割线, bordered: 带分割线)  | string     | "striped" |
| dataSource | 表格内容数据表，详见下面                           | array      | []        |
| columns    | 表格mei每行数据，每项的说明，数组中每项详见column    | array      | []        |
| showHeader | 是否显示表头                                     | boolean    | true     |

### column

| 参数        | 说明                                           | 类型        | 默认值    |
|----------- |----------------------------------------------- | ---------- |---------- |
| key        | 列数据在数据项中对应的 key                        | string or number | -   |
| title      | 该列表头显示的文字                                | string     | -         |
| render     | 如果没有render直接把dataSource中对应的值输出, 如果有则使用render返回值，参数(value, rowIndex, colIndex)  | functon      | -        |

### dataSource

dataSource 是一个数组，中间每一项是一个对象，名值对分别是columns对应的{key: value}