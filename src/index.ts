import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from './xhr'
import bulidURL from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(result => {
    return transformResponseData(result)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)

  config.headers = transformHeaders(config)

  config.data = transformRequestData(config)
}

// get 参数解析
function transformUrl(config: AxiosRequestConfig): string {
  let { url, params } = config
  return bulidURL(url, params)
}

// 请求头设置
function transformHeaders(config: AxiosRequestConfig): void {
  let { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 解析请求body数据（post）
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformResponseData(result: AxiosResponse): AxiosResponse {
  result.data = transformResponse(result.data)
  return result
}

export default axios
