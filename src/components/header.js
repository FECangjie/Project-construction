import React from 'react'
import classnames from 'classnames'

import {model, connect, router} from 'app'

const { Link } = router

export default props => {
  return (
    <div className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">此处LOGO</a>
      </div>
      <ul className="nav navbar-nav">
        <li className={classnames({'nav-item': true, 'active': props.path === '/'})}><Link to="/">首页</Link></li>
        <li className={classnames({'nav-item': true, 'active': props.path === '/about'})}><Link to="/about">关于</Link></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="输入搜索关键词"/>
          <div className="input-group-btn"><i className="iconfont icon-search"/></div>
        </div>
      </form>
      <div className="navbar-userinfo">
        <div className="navbar-panel">
          <span className="info"><span className="name">王明</span>，您好~</span>
          <i className="divide">|</i>
          <span className="btn-login" data-mark="logout">退出</span>
        </div>
      </div>
    </div>
  )
}