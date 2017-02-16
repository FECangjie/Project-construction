import React, { PropTypes } from 'react'
import cx from 'classnames'
import '../style'

const maxSpan = 12

export default function Col (props) {
  const span = Math.min(Math.max(parseInt(props.span), 0), maxSpan)
  const offset = Math.min(Math.max(parseInt(props.offset), 0), maxSpan - span)
  return <div className={cx([
    `col-md-${span}`,
    `col-md-offset-${offset}`,
    props.className
  ])}>{props.children}</div>
}

Col.defaultProps = {
  span: 12,
  offset: 0
}
Col.propTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  className: PropTypes.string
}