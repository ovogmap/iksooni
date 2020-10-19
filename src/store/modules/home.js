
const GET_CONTENT = 'main/GET_CONTENT'
const START_LOADING = 'main/START_LOADING'
const END_LOADING = 'main/END_LOADING'

export const onGetContent = (content) => ({type: GET_CONTENT, content})
export const onStartLoading= () => ({type:START_LOADING,})
export const onEndLoading = () => ({type:END_LOADING,})



const INITIAL_STATE = {
  isLoading: false,
  contents : [
    {
      id:'',
      text: ''
    }
  ]
}


export default function main(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_CONTENT:
      return {
        ...state,
        contents: action.content
      }
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case END_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}