/**
 * @description 浮层
 * @autor dongyajie@lianjia.com
 * @date  16/9/26.
 */

import React, {Component, PropTypes} from 'react'
import DialogWrapper from './DialogWrapper'

export default class extends Component {
  render () { return <DialogWrapper {...this.props}></DialogWrapper> }
}