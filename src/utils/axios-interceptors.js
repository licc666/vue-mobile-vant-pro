import Cookie from 'js-cookie'
// 401拦截
const resp401 = {
  /**
   * 响应数据之前做点什么
   * @param response 响应对象
   * @param options 应用配置 包含: {store, Toast}
   * @returns {*}
   */
  onFulfilled(response, options) {
    const { Toast } = options
    if (response.status === 401) {
      Toast.fail('无此接口权限')
    }
    return response
  },
  /**
   * 响应出错时执行
   * @param error 错误对象
   * @param options 应用配置 包含: {store, Toast}
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const { Toast } = options
    Toast.fail(error.message)
    return Promise.reject(error)
  }
}

const resp403 = {
  onFulfilled(response, options) {
    const { Toast } = options
    if (response.status === 403) {
      Toast.fail(`请求被拒绝`)
    }
    return response
  }
}

const resp404 = {
  onFulfilled(response, options) {
    const { Toast } = options
    if (response.status === 404) {
      Toast.fail(`请求不存在`)
    }
    return response
  }
}

const resp500 = {
  onFulfilled(response, options) {
    const { Toast } = options
    if (response.status === 500) {
      Toast.fail(`服务器响应错误`)
    }
    return response
  }
}

const reqCommon = {
  /**
   * 发送请求之前做些什么
   * @param config axios config
   * @param options 应用配置 包含: {store, Toast}
   * @returns {*}
   */
  onFulfilled(config, options) {
    const { Toast } = options
    const { url, xsrfCookieName } = config
    if ((url.indexOf('login') === -1 && url.indexOf('token') === -1) && xsrfCookieName && !Cookie.get(xsrfCookieName)) {
      Toast.fail('认证 token 已过期，请重新登录')
    }
    return config
  },
  /**
   * 请求出错时做点什么
   * @param error 错误对象
   * @param options 应用配置 包含: {store, Toast}
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const { Toast } = options
    Toast.fail(error.message)
    return Promise.reject(error)
  }
}

export default {
  request: [reqCommon], // 请求拦截
  response: [resp401, resp403, resp404, resp500] // 响应拦截
}
