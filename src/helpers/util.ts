const toString = Object.prototype.toString

// 判断时间类型
export function isDate(date: any): date is Date {
  return toString.call(date) === '[object Date]'
}

// 判断对象类型
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
