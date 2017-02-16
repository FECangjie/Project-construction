import React, { PropTypes, Component } from 'react'
import Animate from 'rc-animate'
import cssAnimation from 'css-animation'
import cx from 'classnames'

import '../style'

const noop = () => {}

function animate (node, show, done) {
  let height
  return cssAnimation(node, 'ani-pannel-collapse', {
    start () {
      if (!show) {
        node.style.height = `${node.offsetHeight}px`
      } else {
        height = node.offsetHeight
        node.style.height = 0
      }
    },
    active () {
      node.style.height = `${show ? height : 0}px`
    },
    end () {
      node.style.height = ''
      done()
    }
  })
}
const animation = {
  enter: (node, done) => animate(node, true, done),
  leave: (node, done) => animate(node, false, done),
  appear: (node, done) => animate(node, true, done)
};

export default class Pannel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openKeys: props.openKeys || props.defaultOpenKeys,
      selectedKey: props.selectedKey || props.defaultSelectKey
    }
  }
  componentwillReceiveProps (props) {
    if (props.openKeys) {
      this.setState({openKeys: props.openKeys})
    }
    if (props.selectedKeys) {
      this.setState({selectedKeys: props.selectedKeys})
    }
  }
  togglePannel (key) {
    const openKeys = this.state.openKeys
    const index = openKeys.indexOf(key)
    if (index === -1) {
      this.setState({'openKeys': openKeys.concat(key)})
      this.props.onOpenChange(key, true)
    } else {
      this.setState({'openKeys': openKeys.filter(_key => _key != key)})
      this.props.onOpenChange(key, false)
    }
  }
  selectedKey (key) {
    this.setState({'selectedKey': key})
    this.props.onSelect(key)
  }
  render () {
    const { menus } = this.props
    const { openKeys, selectedKey } = this.state
    return (
      <div className="panel panel-default">{
        menus.map(menu => ([
          <div className="panel-heading" key={menu.key}>
            <div className="panel-title">
              <a href="javascript:;" onClick={() => this.togglePannel(menu.key)}>
                {menu.title}
                <span className="caret"></span>
              </a>
            </div>
          </div>,
          <Animate component="" animation={animation}>{
          openKeys.indexOf(menu.key) === -1 ? null :
            <div className="panel-collapse">
              <div className="panel-body">
                <ul className="nav nav-pills nav-stacked">{
                  menu.pills.map(pill =>
                    <li
                      className={cx({active: selectedKey === pill.key})}
                      key={pill.key}
                      onClick={() => this.selectedKey(pill.key)}
                    >{pill.content}</li>)
                }</ul>
              </div>
            </div>
          }</Animate>
        ]))
      }</div>
    )
  }
}

Pannel.defaultProps = {
  menus: [],
  onSelect: noop,
  onOpenChange: noop
}
Pannel.propTypes = {
  className: PropTypes.string,
  menus: PropTypes.array,
  openKeys: PropTypes.array,
  defaultOpenKeys: PropTypes.array,
  selectedKey: PropTypes.any,
  defaultSelectKey: PropTypes.any,
  onOpenChange: PropTypes.func,
  onSelect: PropTypes.func
}
/**
 * menus = [{
 *   key: '',
 *   title: 'fdsfsdfs',
 *   pills: [{key, render=>{}}]
 * }]
 */