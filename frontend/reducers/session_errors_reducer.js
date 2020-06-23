const { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } = require("../actions/session_actions")



const sessionErrorsReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default sessionErrorsReducer;