import {model, connect, router} from 'app'
import React, { Component, PropTypes } from 'react'

import Header from 'components/header'
import style from './style.styl'
import { Menu, Dropdown, Icon, Button } from 'antd';
import command from './command.png'
export default class BaseInfo extends React.Component {

  componentWillMount () {
    let me = this
    this.state = {
      shortcut: {
        name: '',
        key: ''
      }
    }
  }

  /**
   *  show shortcut key
   */
  showShortcut (param) {
    console.log(param)
  }

  render () {

    const SubMenu = Menu.SubMenu;

    const menu = ( // shortcut key menu
      <Menu onSelect={this.showShortcut}>
        <Menu.Item key={'open'} item={['command','alt','i']}>打开控制台</Menu.Item>
        <Menu.Item>清空控制台</Menu.Item>
        <Menu.Item>跳过断点</Menu.Item>
        <SubMenu title="刷新">
          <Menu.Item>强制刷新</Menu.Item>
          <Menu.Item>刷新</Menu.Item>
        </SubMenu>
        <SubMenu title="搜索">
          <Menu.Item>搜索文本</Menu.Item>
          <Menu.Item>搜索资源</Menu.Item>
        </SubMenu>
      </Menu>
    )

    const tpl_menu = (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link shortcut-menu" style={{fontSize: 20}} href="#">
        快捷键
        </a>
      </Dropdown>
    )
    return (
      <div>
        <div className="greeting">Chrome开发者工具{tpl_menu}</div>
        <div className="board">
          <div className="blackbar">

          </div>
          <div className="keyboard">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li><span>!</span><span>1</span></li>
              <li><span>@</span><span>2</span></li>
              <li><span>#</span><span>3</span></li>
              <li><span>$</span><span>4</span></li>
              <li><span>%</span><span>5</span></li>
              <li><span>^</span><span>6</span></li>
              <li><span>&</span><span>7</span></li>
              <li><span>*</span><span>8</span></li>
              <li><span>(</span><span>9</span></li>
              <li><span>)</span><span>0</span></li>
              <li><span>—</span><span>-</span></li>
              <li><span>+</span><span>=</span></li>
              <li></li>
              <li></li>
              <li>Q</li>
              <li>W</li>
              <li>E</li>
              <li>R</li>
              <li>T</li>
              <li>Y</li>
              <li>U</li>
              <li>I</li>
              <li>O</li>
              <li>P</li>
              <li></li>
              <li></li>
              <li><span>|</span><span>\</span></li>
              <li></li>
              <li>A</li>
              <li>S</li>
              <li>D</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li></li>
              <li></li>
              <li></li>
              <li>shift</li>
              <li>Z</li>
              <li>X</li>
              <li>C</li>
              <li>V</li>
              <li>B</li>
              <li>N</li>
              <li>M</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li><img style={{width:12}} src={command} /> </li>
              <li type="space"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="touch">
          </div>
          </div>
      </div>
    )
    return (
      <div>
        <Header path={props.location.pathname}/>
        <div className={style.greeting}>原来你是低能儿</div>
        <Button>确定</Button>
      </div>
    )
  }
}
