import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, history } from './model'

export default function (router, domContainer) {
  ReactDOM.render(
    <Provider store={store}>{router({history})}</Provider>,
    domContainer
  )
}