const { RECEIVE_CURRENT_USER } = require("../actions/session_actions")

const usersReducer = (state ={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    default:
      return state;
  }
}

export default usersReducer;