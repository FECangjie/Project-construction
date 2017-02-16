export default class Subscribe {
  constructor () {
    this._events = {}
    this._emitHooks = []
  }
  on (type, callback, context) {
    [].concat(type).forEach(type => {
      let events = this._events[type] = this._events[type] || []
      events.push([callback, context])
    })
  }
  off (type, callback) {
    if (type === undefined) {
      this._events = {}
      return
    }

    [].concat(type).forEach(type => {
      if (!this._events[type]) return
      if (callback === undefined) {
        this._events[type].length = 0
        return
      }
      this._events[type] =
      this._events[type].filter(one => one[0] != callback)
    })
  }
  emit (type, ...data) {
    [this].concat(this._emitHooks).forEach(event => {
      for (let one of (event._events[type] || [])) {
        if (one[1]) {
          one[0].apply(one[1], data)
        } else {
          one[0](...data)
        }
      }
    })
  }
}