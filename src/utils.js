export function noop () {}

export function omit (obj, props) {
  const filtered = {}
  for (let name in obj) {
    if (props.indexOf(name) === -1) filtered[name] = obj[name]
  }
  return filtered
}

export function has (obj) {
  return obj !== undefined && obj !== null
}

export function queryString (query = {}) {
  const result = []
  for (let name in query) {
    if (query.hasOwnProperty(name)) {
      const value = query[name]
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'number' && isNaN(value)) ||
        String(value).length === 0
      ) continue
      result.push(`${name}=${value}`)
    }
  }
  return result.join('&')
}

/*  ＃function ajax#
 *  < {
 *    url:          String   请求地址
 *    param:        Object   请求参数.可缺省
 *    method:       String   请求方法GET,POST,etc. 可缺省，默认是GET
 *    contentType:  String   返回内容的格式。如果是JOSN会做JSON Parse， 可缺省,默认是json
 *    context:      Any      callback回调函数的this指向。可缺省
 *  }
 *  < callback:     Function 请求的callback, 如果失败返回－1， 成功返回内容
 *  用于发起ajax或者jsonp请求
 */
function defalutOption (option, defalutValue) {
  return option === undefined ? defalutValue : option
}

function joinUrl (url, queryString) {
  if (queryString.length === 0) return url
  return url + (url.indexOf('?') === -1 ? '?' : '&') + queryString
}

export function ajax (options = {}, callback = noop) {

  let url         = defalutOption(options.url, '')
  let method      = defalutOption(options.method, 'GET')
  let contentType = defalutOption(options.contentType, 'json')
  let context     = defalutOption(options.context, null)
  let param       = defalutOption(options.param, {})
  let query       = queryString(param)

  let xhr = new XMLHttpRequest()
  if (method.toLowerCase() === 'get') {
    url = joinUrl(url, query)
    query = ''
  }
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  xhr.send(query)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 ) {
      if (xhr.status === 200) {
        let data = xhr.responseText
        if (contentType.toLowerCase() === 'json') {
          try {
            data = JSON.parse(data)
          } catch(e) {
            data = -1
          }
        }
        return callback.call(context, data)
      } else {
        return callback.call(context, -1)
      }
    }
  }
}