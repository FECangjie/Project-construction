export default function createAppMiddleware (effectMap) {
  return _ref => {
    const dispatch = _ref.dispatch
    const getState = _ref.getState
    return next => {
      return function (action) {
        for (let effectName in effectMap) {
          if (action.type === effectName) {
            return effectMap[effectName]({dispatch, getState}, action)
          }
        }
        return next(action)
      }
    }
  }
}