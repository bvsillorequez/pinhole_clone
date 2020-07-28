const { REMOVE_LIKE, RECEIVE_LIKE } = require("../actions/like_actions")

const LikeReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like
      return nextState
    case REMOVE_LIKE:
      delete nextState[action.likeId]
      return nextState
    default:
      return state;
  }
}

export default LikeReducer