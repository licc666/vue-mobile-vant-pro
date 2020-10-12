import { request } from '@/utils/request'

export async function getAccessToken(params) { // 获取access_token
  // return request('https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ID&corpsecret=SECRET', 'get', params)
  return request('/api/v1/get_test_token', 'get', params)
}
