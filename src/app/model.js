import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

import appMiddleware from './appMiddleware'

const reducerMap = {}
const effectMap = {}

const withNameSpace = (name, nameSpace) => {
  return nameSpace === undefined ? name : nameSpace + '.' + name
}
const makeReducer = () => {
  return combineReducers({...reducerMap, routing: routerReducer})
}

const middleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory)),
  applyMiddleware(appMiddleware(effectMap))
)

export const store = createStore(makeReducer(), middleware)
export const history = syncHistoryWithStore(browserHistory, store)

export default function model ({
  nameSpace,
  state: defaultState=null,
  reducers={},
  effects={}
}) {
  //处理effect
  for (let effectName in effects) {
    effectMap[withNameSpace(effectName, nameSpace)] = effects[effectName]
  }
  reducerMap[nameSpace] = (state=defaultState, action) => {
    for (let reducerName in reducers) {
      if (!reducers.hasOwnProperty(reducerName)) continue
      if (withNameSpace(reducerName, nameSpace) === action.type)
        return reducers[reducerName](state, action)
    }
    return state
  }
  store.replaceReducer(makeReducer())
}