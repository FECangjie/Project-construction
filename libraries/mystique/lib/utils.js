export function noop () {}

export function omit (obj, props) {
  const filtered = {}
  for (let name in obj) {
    if (props.indexOf(name) === -1) filtered[name] = obj[name]
  }
  return filtered
}