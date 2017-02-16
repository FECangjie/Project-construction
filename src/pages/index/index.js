import {model, connect, router} from 'app'
import React from 'react'

import Header from 'components/header'
import style from './style.module.styl'

export default props => {
  return (
    <div>
      <Header path={props.location.pathname}/>
      <div className={style.greeting}>Hello World!</div>
    </div>
  )
}