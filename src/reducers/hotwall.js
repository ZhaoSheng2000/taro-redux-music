import {
  HOT_WALL,
  ERR_MSG
} from '../constants/hotwall'

const initWall = {
  wall:''
};

export default function wall(state=initWall,action) {
  switch (action.type) {
    case HOT_WALL:
      return{
        ...state,
        wall:action.data
      }
    case ERR_MSG:
      return{
        ...state,
        message:action.data
      }
    default:
    return state
  }
}
