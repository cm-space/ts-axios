const toString = Object.prototype.toString

// 判断时间类型
export function isDate(date: any): Boolean {
  return toString.call(date) === '[object Date]'
}

// export function isObject(object: any): Boolean {
//   return toString.call(object) === '[object Object]'
// }

// 判断对象类型
export function isPlainObject(val: any): val is Object {

  return toString.call(val) === '[object Object]'
}
