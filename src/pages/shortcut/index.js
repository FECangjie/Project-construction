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
    // me.versionCompare('v1.1.1', 'v2.0.1', 'v1.98.1', 'V2.1.0', 'v0.99.99') // 测试用例
    console.log(me.isDayLightTime())
  }


/*!
 *判断一个时间是否在夏令时
 */
 isDayLightTime () {
    var now = new Date('1990-05-05');
    var start = new Date();
    debugger

    //得到一年的开始时间
    start.setMonth(0);
    start.setDate(1);
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);

    var middle = new Date(start.getTime());
    middle.setMonth(6);

    var margin = 0;
    if(isEastEarthTime())
    {
        margin = start.getTimezoneOffset();
    }
    else
    {
        margin = middle.getTimezoneOffset();
    }
    if(now.getTimezoneOffset() == margin)
    {
        return true;
    }
    return false;
}


  /**
   * compare version
   */
  versionCompare () {
    let versions = [], verNum = []
    let errorText = '' // 友好提示
    let flag = true
    for (let i=0;i<arguments.length;i++) {
      versions.push(arguments[i])
    }
    if (versions.length > 1) { // 1。校验参数长度
      verNum = versions.map((item, index) => { // 参数遍历
          if(/^[Vv]([0-9]+[\-.])*[0-9]+$/.test(item)) { // 校验输入
            return item.replace(/[^0-9\-.]/ig,"") // 格式转换 剔除版本号前缀等。。
          } else {
            errorText = item + '格式错误，请输入正确格式版本号。' // 提示
            flag = false
            return 0
          }
        })
    } else {
      errorText = '请输入2个或2个以上版本号' // 提示
      flag = false
    }
    if (!flag) {
      alert(errorText || '存在错误输入。')
      return // 校验不通过，函数over
    }
    function compare (v1, v2) { // 核心方法 比较两个版本号
      let a1 = v1.split('.')
      let a2 = v2.split('.')
      let result = true // 当前版本号‘守擂’
      a1.every((item, index) => { // 从左到右遍历比较版本大小
        if (parseInt(a1[index]) === parseInt(a2[index])) { // 回合平手 继续下一回合
          return true
        } else {
          result = parseInt(a1[index]) < parseInt(a2[index]) ? false : true // 判断‘守擂’结果
        }
        return false // 比赛结束
      })
      return result // 返回比较结果
    }
    let lastVersion = 0 // 最终版本号
    verNum.forEach((item, index) => {
      lastVersion = compare(verNum[lastVersion],verNum[index]) ? lastVersion : index // 2。1v1比较版本号
    })
    alert('最终版本号：' + arguments[lastVersion]) // 3.输出结果 函数结束
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
          <Menu.Item key={'refresh1'} item={'com + R'}>刷新</Menu.Item>
          <Menu.Item key={'refresh2'} item={'enter'}>强制刷新</Menu.Item>
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
              <li               className={this.state.shortcut.key.indexOf('Down')!==-1?"actived":""}
></li>
              <li></li>
              <li
              className={this.state.shortcut.key.indexOf('Up')!==-1?"actived":""}
              ></li>
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
