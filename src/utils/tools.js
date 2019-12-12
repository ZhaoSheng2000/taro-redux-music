import Taro from '@tarojs/taro'

export function setToken(uid){
  Taro.setStorageSync('uid',uid)
}

export function getToken() {
  return Taro.getStorageSync('uid')
}

export function isLogin (){
  if (getToken()){
    return true
  } else {
    return false
  }
}



