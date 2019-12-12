import request from '../utils/request'
import {serverUrl} from '../config'

/**
 * 手机登陆
 * @param data phone: 手机号码 password: 密码
 * @returns {*}
 */
export function phoneloginapi(data) {
  return request(serverUrl+'/login/cellphone','get',data)
}

/**
 * 邮箱登陆(不稳定，已废弃)
 * @param data  email: 163 网易邮箱 ，password: 密码
 * @returns {*}
 */
export function emailloginapi(data) {
  return request(serverUrl+'/emaillogin','get',data)
}

/**
 * 首页轮播图
 * @param data
 * @returns {*}
 */
export function banner(data) {
  return request(serverUrl+'/banner','get',data)
}

/**
 * 云村热评
 * @param data
 * @returns {*}
 */
export function hotwallapi() {
  return request(serverUrl+'/comment/hotwall/list','get')
}

