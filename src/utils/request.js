import Taro from '@tarojs/taro'

/**
 *
 * @param url   地址
 * @param method  方法
 * @param data  传递的数据
 */

export default function request(url, method, data) {
  Taro.showLoading({
    title: '加载中...'
  })
  return Taro.request({
    url,
    method,
    data,
    header: {
      'content-type': 'application/json'
    }
  }).then(res => {
    Taro.hideLoading()
    return res
  }).catch(err => {
    Taro.hideLoading()
    return err
  })
}
