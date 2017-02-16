import React, { PropTypes } from 'react'
import cx from 'classnames'
import '../style'

export default function Row (props) {
  return <div className={cx(['row', props.className])}>{props.children}</div>
}

Row.propTypes = {
  className: PropTypes.string
}