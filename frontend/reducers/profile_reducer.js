const { RECEIVE_USER } = require("../actions/profile_actions")

const ProfileReducer = (state={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_USER:
      return action.user
    default:
      return state;
  }
}

export default ProfileReducer