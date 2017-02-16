/**
 * @description
 * @autor dongyajie@lianjia.com
 * @date  16/9/27.
 */
import React from 'react'
import getContainerRenderMixin from './getContainerRenderMixin'
import Dialog from './Dialog'

const DialogWrapper = React.createClass({
  mixins: [
    getContainerRenderMixin({
      isVisible (instance) {return instance.props.visible },
      autoDestroy: false,
      getComponent(instance, extra) {
        return <Dialog {...instance.props} {...extra} key="dialog" />
      }
    })
  ],
  getDefaultProps () { return { visible: false } },
  shouldComponentUpdate( {visible} ) {
    return !!(this.props.visible || visible)
  },
  componentWillUnmount () {
    if (this.props.visible) {
      this.renderComponent({
        afterClose: this.removeContainer,
        visible: false,
      }, this.removeContainer);
    } else {
      this.removeContainer();
    }
  },
  render () { return null }
})

export default DialogWrapper