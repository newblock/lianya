
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MGS = 'ERROR_MGS'

const initState={
  user:'',
  pwd:'',
  type:'',
  isAuth:''
}

export function userReducer(state=initState, action){

  switch(action.type){

    case REGISTER_SUCCESS:
      return {...state,
              isAuth:true,
             ...action.payload}

    case ERROR_MGS:
      return{...state,
            isAuth:false}

    default:
      return state
  }
}

export function registerSuccess(data){
  return {type:REGISTER_SUCCESS, payload:data}
}

export function errorMsg(msg){
  return { msg, type:ERROR_MGS }
}
