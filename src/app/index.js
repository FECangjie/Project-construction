export {router, routerRedux} from './router'
export model from './model'
export start from './start'
export { connect } from 'react-redux'

import Subscribe from './subscribe'
const sub = new Subscribe

export const listen = (type, callback, context) => {
  sub.on(type, callback, context)
  return () => sub.off(type, callback)
}
export const unlisten = (type, callback) => sub.off(type, callback)
export const emit = (type, args) => sub.emit(type, args)
