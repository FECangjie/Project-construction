---
order: 0
title: 表哥
---

表格一遍都是很复杂的

```js
import { Table, Button } from 'mystique-react'

const columns = [
  {key: 'index'},
  {key: 'name', title: '姓名'},
  {key: 'tel', title: '手机号码'},
  {key: 'mail', title: '邮箱'}
]
const dataSource = [
  {key: 0, index: 1, name: '门店红', tel: '13888888888', mail: 'mendianhong@lianjia.com'},
  {key: 1, index: 2, name: '朱一', tel: '13777777777', mail: 'zhuyi01@lianjia.com'},
  {key: 2, index: 3, name: '范欣欣', tel: '13666666666', mail: 'fanxinxin@lianjia.com'},
  {key: 3, index: 4, name: '顾黎明', tel: '13555555555', mail: 'guliming@lianjia.com'},
  {key: 4, index: 5, name: '王明', tel: '13444444444', mail: 'wangming@lianjia.com'}
]

class FuncTableDemo extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      dataSource: dataSource.slice(),
      columns: columns.concat([{
        key: 'delete',
        title: '删除',
        render: (data, rowIndex, colIndex) => (
          <Button onClick={() => {
            this.setState({
              'dataSource': this.state.dataSource.filter((_, index) => rowIndex != index)
            })
          }}>删除</Button>
        )
      }])
    }
  }
  render () {
    return <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
  }
}

ReactDOM.render(
  <div>
    <h2>striped 表格</h2>
    <Table dataSource={dataSource} columns={columns}/>
    <h2>bordered 表格</h2>
    <Table type="bordered" dataSource={dataSource} columns={columns}/>
    <h2>没有表头的表格</h2>
    <Table showHeader={false} dataSource={dataSource} columns={columns}/>
    <h2>带功能按钮的表格</h2>
    <FuncTableDemo/>
  </div>,
  mountNode
)
```
