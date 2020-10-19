
const CURRENT_USER = 'auth/CURRENT_USER'
const ONCHANGE_EMAIL = 'auth/ONCHANGE_EMAIL'
const ONCHANGE_PASS = 'auth/ONCHANGE_PASS'
const ONCHANGE_NAME = 'auth/ONCHANGE_NAME'
const ISLOGIN = 'auth/ISLOGIN'
const ISLOGOUT = 'auth/ISLOGOUT'
const ERROR = 'auth/ERROR'
const CLEAR_INPUTS = 'auth/CLEAR_INPUTS'


export const onCurrUser = (user) => ({type: CURRENT_USER, user})
export const onChangeEmail = (email) => ({type: ONCHANGE_EMAIL, email})
export const onChangePassword = (password) => ({type: ONCHANGE_PASS, password})
export const onChangeNickName = (displayName) => ({type: ONCHANGE_NAME, displayName})
export const onLogin = () => ({type:ISLOGIN,})
export const onLogout = () => ({type:ISLOGOUT,})
export const onClearInputs = () => ({type:CLEAR_INPUTS,})
export const onErroe = (error) => ({type:ERROR, error})

const INITIAL_STATE = {
  isLogin: false,
  inputs: {
    email: '',
    password: '',
    displayName: ''
  },
  currentUser : {
    uid: '',
    email: '',
    displayName: ''
  },
  error: ""
}

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type){
    case CURRENT_USER:
      return {
        ...state,
        currentUser: {
          uid: action.user.uid,
          email: action.user.email,
          displayName: action.user.displayName
        }
      }
    case ISLOGIN:
      return {
        ...state,
        isLogin: true
      }
    case ISLOGOUT:
      return {
        ...state,
        isLogin: false
      }
    case ONCHANGE_EMAIL:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          email: action.email,
        }
      }  
    case ONCHANGE_PASS:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          password: action.password,
        }
      }  
    case ONCHANGE_NAME:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          displayName: action.displayName,
        }
      }  
    case CLEAR_INPUTS:
      return {
        ...state,
        inputs: {
          email: '',
          password: '',
          displayName: ''
        }
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}