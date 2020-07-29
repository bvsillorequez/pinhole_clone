const { REMOVE_LIKE, RECEIVE_LIKE, RECEIVE_ALL_LIKES } = require("../actions/like_actions")

const LikeReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_ALL_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      // return Object.assign(state, { id: action.id, user: action.user, post_id: action.post })
      return { ...state, [action.id]: { id: action.id, user: action.user, post_id: action.post }}
    case REMOVE_LIKE:
      delete nextState[action.likeId]
      // nextState = Object.assign({}, null)
      return nextState
    default:
      return state;
  }
}

export default LikeReducer