---
order: 0
title: 基本
---

最简单的用法。


```js
import { Modal, Button } from 'mystique-react'

const Test = React.createClass({
  getInitialState () {
    return { visible: false, exists: true }
  },
  showModel () {
    this.setState({visible: true, exists: true})
  },
  remove () {
    this.setState({ exists: false })
  },
  hideModel () {
    this.setState({ visible: false })
  },
  render(){
    return (
      <div>
        <Button onClick={this.showModel}>打开一个层</Button>
        {(()=>{
          if (this.state.exists) {
            return (
              <Modal
                visible={this.state.visible}
                onClose={() => this.setState({visible: false})}
                title="我是一个层"
              >
                <div style={{height:'1000px'}}>
                  <div>this is a dialog
                    <a href="javascript:;" onClick={this.hideModel}>关闭</a>
                  </div>
                </div>
              </Modal>
            )
          }
          return null
        })()}
      </div>
    )
  }
})
ReactDOM.render(<Test></Test>, mountNode)
```
