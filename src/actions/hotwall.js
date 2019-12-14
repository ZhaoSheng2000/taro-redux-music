import {
  HOT_WALL,
  ERR_MSG
} from '../constants/hotwall'

import {
  hotwallapi
} from '../service/api'

const errMsg = (msg) => {
  return {
    type: ERR_MSG,
    data: msg
  }
}
const hotWall =(hotwall) =>{
  return{
    type: HOT_WALL,
    data: hotwall
  }

}
export const hotwall = () =>{
  return async dispatch =>{
    const response = await hotwallapi()
    const result = response.data;
    if (result.code===200){
      dispatch(hotWall(result.data))
    }
    else {
      dispatch(errMsg('获取失败！'))
    }
  }
}
