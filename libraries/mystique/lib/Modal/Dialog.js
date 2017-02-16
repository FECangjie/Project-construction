/**
 * @description 浮层
 * @autor dongyajie@lianjia.com
 * @date  16/9/26.
 */

import React, {Component, PropTypes} from 'react'
import cx from 'classnames'
import style from '../style'


const dialogs = []
function addDialog (dialog) {
  document.body.style.cssText = 'width: 100%; overflow: hidden'
  if (dialogs.indexOf(dialog) === -1) dialogs.push(dialog)
}

function removeDialog (dialog) {
  const index = dialogs.indexOf(dialog)
  if (index >= 0) dialogs.splice(index, 1)
  if (dialogs.length === 0) {
    document.body.style.cssText = ''
  }
}

export default class Dialog extends Component {
  constructor (props) {
    super(props)
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
    this.onMaskClick = this.onMaskClick.bind(this)
  }
  componentDidMount () {
    if (this.isVisible()) addDialog(this)
  }
  componentDidUpdate () {
    if (this.isVisible()) {
      addDialog(this)
    } else {
      removeDialog(this)
    }
  }
  componentWillUnmount () {
    removeDialog(this)
  }
  onCloseButtonClick () {
    if (this.props.onClose) this.props.onClose()
  }
  onMaskClick (event) {
    if (
      event.target === this.refs.modal &&
      this.props.maskClosable &&
      this.props.onClose
    ) this.props.onClose()
  }
  isVisible () { return this.props.visible }
  render() {
    return (
      <div
        ref="modal"
        className="modal"
        style={{
          display: this.isVisible() ? 'block' : 'none',
          backgroundColor: 'rgba(0,0,0,0.5)',
          overflow: 'auto'
        }}
        onClick={this.onMaskClick}
      >
        <div className="modal-dialog" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
                <button
                  className="close"
                  onClick={this.onCloseButtonClick}
                >
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">关闭</span>
                </button>
                <div className="modal-title">{this.props.title}</div>
            </div>
            <div className={cx(['modal-body', this.props.className])}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dialog.defaultProps = {
  title: '',
  visible: false,
  maskClosable: true
}
Dialog.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func
}