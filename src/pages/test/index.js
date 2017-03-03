import { model, connect, router } from 'app'
import React from 'react'

import style from './style.styl'
import Header from 'components/header'
const { Link } = router

model({
  nameSpace: 'about',
  state: {
    count: 0
  },
  reducers: {
    plus (state, {num}) {
      return {...state, count: state.count + num}
    },
    minus (state, {num}) {
      return {...state, count: state.count - num}
    },
    test (state, {n}) {
      alert('n等于'+n)
    }
  }
})

export default connect( ({about}) => ({about}) )( props => {
  return (
    <div>
      <Header path={props.location.pathname}/>
      <div className="greeting">演示页面</div>
      <div className="demo-wrap">
        <p className="demo"><a className="a-demo b-demo c-demo d-demo">一个超链接</a></p>
        <p className="demo">两行文本</p>
        <p className="demo" id="demo" onClick={ () => props.dispatch({type: 'about.test',n:1}) }><span className=" am">点我</span></p>

      </div>
      <div>{props.about.count}</div>
      <button onClick={ () => props.dispatch({type: 'about.plus', num: 1}) }>+</button>
      <button onClick={ () => props.dispatch({type: 'about.minus', num: 1}) }>-</button>
    </div>
  )
})
