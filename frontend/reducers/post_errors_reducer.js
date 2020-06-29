const { RECEIVE_ERRORS, CLEAR_ERRORS } = require("../actions/post_actions")

const PostErrorsReducer = (state ={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors
    case CLEAR_ERRORS:
      return {}
    default:
      return state;
  }
}

export default PostErrorsReducer