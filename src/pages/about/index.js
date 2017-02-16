import { model, connect, router } from 'app'
import React from 'react'

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
    }
  }
})

export default connect( ({about}) => ({about}) )( props => {
  return (
    <div>
      <Header path={props.location.pathname}/>
      <div>About</div>
      <div>{props.about.count}</div>
      <button onClick={ () => props.dispatch({type: 'about.plus', num: 1}) }>plus</button>
      <button onClick={ () => props.dispatch({type: 'about.minus', num: 1}) }>minus</button>
      <Link to="/">to index</Link>
    </div>
  )
})