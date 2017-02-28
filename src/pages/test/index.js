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
    test () {
      alert(1)
    }
  }
})

export default connect( ({about}) => ({about}) )( props => {
  return (
    <div>
      <Header path={props.location.pathname}/>
      <div className="greeting">演示页面</div>
      <div className="demo-wrap">
        <p className="demo">$ === querySelector, $$ === querySelectAll</p>
        <p className="demo">document.body.contentEditable=true</p>
        <p className="demo" id="demo" onClick={ () => props.dispatch({type: 'about.test'}) }>getEventListeners($('selector')).eventName[0].listener & monitorEvents unmonitorEvents</p>
        <p className="demo">time, table</p>
        <p className="demo">dir</p>
        <p className="demo">document.body.contentEditable=true</p>
        <p className="demo">document.body.contentEditable=true</p>

      </div>
      <div>{props.about.count}</div>
      <button onClick={ () => props.dispatch({type: 'about.plus', num: 1}) }>+</button>
      <button onClick={ () => props.dispatch({type: 'about.minus', num: 1}) }>-</button>
    </div>
  )
})
