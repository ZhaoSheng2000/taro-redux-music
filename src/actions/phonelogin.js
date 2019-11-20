import {
  LOGIN_SUCCESS,
  ERR_MSG
} from '../constants/phonelogin'

import {
  phoneloginapi
} from '../service/api'

//同步action
const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    data: user
  }
}
const errMsg = (msg) => {
  return {
    type: ERR_MSG,
    data: msg
  }
}
//异步
export const login = (data) => {
  return async dispatch => {
    const response = await phoneloginapi(data);
    const result = response.data;
    if (result.code === 400) {
      dispatch(errMsg('账号不存在！'))
    } else if (result.code===502){
      dispatch(errMsg('密码错误！'))
    } else {
      dispatch(loginSuccess(result))
    }
  }
}
