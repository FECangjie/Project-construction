import React, { PropTypes } from 'react'
import cx from 'classnames'
import '../style'

import iconNames from './map'

export default function Icon (props) {
  const iconClassName = `icon-${props.name}`
  return <i className={cx(['iconfont', iconClassName, props.className])}/>
}

Icon.iconNames = iconNames
Icon.defaultProps = {
  name: iconNames[0]
}
Icon.propTypes = {
  name: PropTypes.oneOf(iconNames),
  className: PropTypes.string
}