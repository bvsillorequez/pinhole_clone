const { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } = require("../actions/session_actions")

const _nullSession = {id: null}

const SessionReducer = (state ={}, action) =>{
  Object.freeze(state)
  
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.user.id})
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}

export default SessionReducer;