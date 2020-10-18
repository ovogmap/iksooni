
const CHANGE_VLAUE = 'writing/CHANGE_VALUE' 
const SUBMIT_VLAUE = 'writing/SUBMIT_VLAUE'

export const onChangeValue = (content) => ({type: CHANGE_VLAUE, content})
export const onSubmitVlaue = (content) => ({type: CHANGE_VLAUE, content})

const INITIAL_STATE = {
  content: '',
  nickName: '',
  id: ''
}

export default function writing(state = INITIAL_STATE, action) {
  switch(action.type){
    case CHANGE_VLAUE:
      return {
        ...state,
        content: action.content
      }
    case SUBMIT_VLAUE:
      return {
        ...state,
        content: action.content
      }
    default:
      return state;
  }
}