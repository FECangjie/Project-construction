import {model, connect, router} from 'app'
import React from 'react'

import Header from 'components/header'

export default props => {
  return (
    <div>
      <Header/>
      <div>这个页面去火星了</div>
    </div>
  )
}