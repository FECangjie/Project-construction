import React, { PropTypes } from 'react'
import cx from 'classnames'
import '../style'

import {noop} from '../utils'
import Icon from '../Icon'

const directWrap = (href) => () => location.href = href

export default function Button (props) {
  const className = cx([
    'btn',
    `btn-${props.type}`,
    {
      'btn-lg': props.size === 'large',
      'disabled': props.disabled
    },
    props.className
  ])
  const icon = props.icon ? <Icon name={props.icon}/> : null
  const onClick = props.onClick || (props.href ? directWrap(props.href) : noop)
  return (
    <button className={className} onClick={onClick}>
      {icon}<span>{props.children}</span>
    </button>
  )
}

Button.iconNames = Icon.iconNames
Button.defaultProps = {
  type: 'normal',
  size: 'normal',
  disabled: false
}
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'primary', 'border', 'link']),
  size: PropTypes.oneOf(['normal', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Icon.iconNames),
  href: PropTypes.string,
  onClick: PropTypes.func
}