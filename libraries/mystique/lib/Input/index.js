import React, { PropTypes, Component } from 'react'
import cx from 'classnames'
import '../style'
import { omit } from '../utils'

export default class Input extends Component {
  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onKeyDown (event) {
    const { onPressEnter, onKeyDown } = this.props
    if (e.keyCode === 13 && onPressEnter) onPressEnter(event)
    if (onKeyDown) onKeyDown(event)
  }

  render () {
    const props = this.props
    const inputProps = {
      ...omit(props, [
        'beforeAddon',
        'afterAddon',
        'className',
        'onPressEnter'
      ]),
      className: 'form-control'
    }
    if (props.text === 'textarea') {
      inputProps.onKeyDown = this.onKeyDown
      return (
        <div className={cx(['input-group', props.className])}>
          <textarea ref="input" {...inputProps}/>
        </div>
      )
    } else {
      return (
        <div className={cx(['input-group', props.className])}>
          <div className="input-group-addon">{props.beforeAddon}</div>
          <input ref="input" {...inputProps}/>
          <div className="input-group-addon">{props.afterAddon}</div>
        </div>
      )
    }
  }
}

Input.defaultProps = {
  beforeAddon: '',
  afterAddon: '',
  type: 'text'
}
Input.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onKeyDown: PropTypes.func,
  onPressEnter: PropTypes.func,
  beforeAddon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  afterAddon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
}