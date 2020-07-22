const { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } = require("../actions/session_actions")

const _nullSession = {id: null}

const SessionReducer = (state ={}, action) =>{
  Object.freeze(state)
  debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.user.id, name: action.user.username})
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}

export default SessionReducer;