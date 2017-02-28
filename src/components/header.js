import React from 'react'
import classnames from 'classnames'

import {model, connect, router} from 'app'

const { Link } = router

export default props => {
  return (
    <div className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">你应该知道的Chrome开发者工具</a>
      </div>
      <ul className="nav navbar-nav">
        <li className={classnames({'nav-item': true, 'active': props.path === '/'})}><Link to="/">首页</Link></li>
        <li className={classnames({'nav-item': true, 'active': props.path === '/'})}><Link to="/">快捷键</Link></li>
        <li className={classnames({'nav-item': true, 'active': props.path === '/about'})}><Link to="/about">关于</Link></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="并没有什么用的搜索框"/>
          <div className="input-group-btn"><i className="iconfont icon-search"/></div>
        </div>
      </form>
      <div className="navbar-userinfo">
        <div className="navbar-panel">
          <span className="info"><span className="name">神秘管理员</span></span>
          <i className="divide"></i>
          <span className="btn-login" data-mark="logout"></span>
        </div>
      </div>
    </div>
  )
}
