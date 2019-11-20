import {LOGIN_SUCCESS,ERR_MSG} from '../constants/phonelogin'

const initUser={
  user:'',
}

export default function user(state=initUser,action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return{
        ...state,
        user:action.data
      };
    case ERR_MSG:
      return{
        ...state,
        message:action.data
      }
    default:
      return state
  }

}
