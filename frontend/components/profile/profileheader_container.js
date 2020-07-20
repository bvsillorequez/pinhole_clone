import {connect} from 'react-redux'
import ProfileHeader from './profileheader'

const mSTP = state => ({
  // session: state.username
})

const mDTP = dispatch => ({
  //call current user thorough action.js thunk
  //api util to fetchUser
  //reducer 2 cases  1 receive current use or error
  //state in mSTP
})

export default connect(mSTP, mDTP)(ProfileHeader)