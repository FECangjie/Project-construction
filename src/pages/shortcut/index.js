import {model, connect, router} from 'app'
import React, { Component, PropTypes } from 'react'
const { Link } = router

import Header from 'components/header'
import style from './style.styl'
import { Menu, Dropdown, Icon, Button, Card } from 'antd';
import command from './command.png'
export default class Shortcut extends React.Component {

  componentWillMount () {
    let me = this
    this.state = {
      shortcut: {
        name: '',
        key: []
      }
    }
  }

  /**
   *  show shortcut key
   */
  showShortcut (param) {
    let me = this
    let shortcut = {
      name: param.item.props.children,
      key: param.item.props.item
    }
    me.setState({ shortcut })
  }

  render () {

    const SubMenu = Menu.SubMenu;

    const menu = ( // shortcut key menu
      <Menu onSelect={this.showShortcut.bind(this)}>
        <Menu.Item key={'open'} item={'com + alt + I'}>打开控制台</Menu.Item>
        <Menu.Item key={'jump'} item={'com + \\'}>跳过断点</Menu.Item>
        <SubMenu title="清空">
          <Menu.Item key={'clear1'} item={'com + K'}>清空控制台</Menu.Item>
          <Menu.Item key={'clear2'} item={'ctrl + L'}>清空控制台</Menu.Item>
        </SubMenu>
        <SubMenu title="刷新">
          <Menu.Item key={'refresh1'} item={'f5'}>刷新</Menu.Item>
          <Menu.Item key={'refresh2'} item={'com + R'}>强制刷新</Menu.Item>
        </SubMenu>
        <SubMenu title="搜索">
          <Menu.Item key={'find1'} item={'com + F'}>搜索文本</Menu.Item>
          <Menu.Item key={'find2'} item={'com + O'}>搜索资源</Menu.Item>
        </SubMenu>
        <SubMenu title="数值调整">
          <Menu.Item key={'number1'} item={'Up/Down'}>1单位</Menu.Item>
          <Menu.Item key={'number2'} item={'shift + Up/Down'}>10单位</Menu.Item>
          <Menu.Item key={'number3'} item={'alt + Up/Down'}>0.1单位</Menu.Item>
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

    const showCard = (
      <Card title={this.state.shortcut.name}
      bordered={false}
      className="show-card" className="show-card">
        <p>{this.state.shortcut.key}</p>
      </Card>
    )
    return (
      <div>
        <div className="greeting">Chrome开发者工具{tpl_menu}</div>
        {this.state.shortcut.name?showCard:''}
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
              <li
              className={this.state.shortcut.key.indexOf('f5')!==-1?"actived":""}
              ></li>
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
              <li
              className={this.state.shortcut.key.indexOf('Q')!==-1?"actived":""}
              >Q</li>
              <li
              className={this.state.shortcut.key.indexOf('W')!==-1?"actived":""}
              >W</li>
              <li>E</li>
              <li
              className={this.state.shortcut.key.indexOf('R')!==-1?"actived":""}
              >R</li>
              <li>T</li>
              <li>Y</li>
              <li>U</li>
              <li
              className={this.state.shortcut.key.indexOf('I')!==-1?"actived":""}
              >I</li>
              <li
              className={this.state.shortcut.key.indexOf('O')!==-1?"actived":""}
              >O</li>
              <li>P</li>
              <li></li>
              <li></li>
              <li
              className={this.state.shortcut.key.indexOf('\\')!==-1?"actived":""}
              ><span>|</span><span>\</span></li>
              <li></li>
              <li>A</li>
              <li>S</li>
              <li>D</li>
              <li
              className={this.state.shortcut.key.indexOf('F')!==-1?"actived":""}
              >F</li>
              <li>G</li>
              <li>H</li>
              <li>J</li>
              <li
              className={this.state.shortcut.key.indexOf('K')!==-1?"actived":""}
              >K</li>
              <li
              className={this.state.shortcut.key.indexOf('L')!==-1?"actived":""}
              >L</li>
              <li></li>
              <li></li>
              <li></li>
              <li
              className={this.state.shortcut.key.indexOf('shift')!==-1?"actived":""}
              >shift</li>
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
              <li
              className={this.state.shortcut.key.indexOf('ctrl')!==-1?"actived":""}
              >ctrl</li>
              <li
              className={this.state.shortcut.key.indexOf('alt')!==-1?"actived":""}
              >alt</li>
              <li
              className={this.state.shortcut.key.indexOf('com')!==-1?"actived":""}
              ><img style={{width:12}} src={command} /> </li>
              <li type="space"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Link to="/test">
            <div className="touch">
            </div>
          </Link>
          </div>
      </div>
    )
  }
}
