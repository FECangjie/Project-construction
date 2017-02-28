import {model, connect, router} from 'app'
import React, { Component, PropTypes } from 'react'

import Header from 'components/header'
import style from './style.styl'
import { Menu, Dropdown, Icon, Button } from 'antd';
export default class Index extends React.Component {

  componentWillMount () {
    let me = this
  }

  render () {
    return (
      <div>
        <Header path={props.location.pathname}/>
        <div className="greeting">原来你是低能儿</div>
        <Button>确定</Button>
      </div>
    )
  }
}
