import { isPlainObject, isDate } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export default function bulidURL(url: string, params?: any) {
  if (!params) {
    return url
  }
  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isPlainObject(val)) {
        val = JSON.stringify(val)
      } else if (isDate(val)) {
        val = val.toISOString()
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams: string = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') !== -1 ? '&' : '?') + serializedParams
  }

  return url
}
