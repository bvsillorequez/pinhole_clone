const { REMOVE_LIKE, RECEIVE_LIKE } = require("../actions/like_actions")

const LikeReducer = (state = {}, action) => {
  debugger
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_LIKE:
      // nextState[action.id] = action
      return Object.assign({}, { id: action.id, user: action.user, post: action.post })
    case REMOVE_LIKE:
      delete nextState[action.likeId]
      return nextState
    default:
      return state;
  }
}

export default LikeReducer