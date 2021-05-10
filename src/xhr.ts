import { AxiosRequestConfig } from './types'

export default function xhr(axios: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = axios

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
