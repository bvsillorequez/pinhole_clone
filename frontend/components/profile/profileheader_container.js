import {connect} from 'react-redux'
import ProfileHeader from './profileheader'
import { fetchUser } from '../../actions/profile_actions'

const mSTP = (state,ownProps) => {
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId],
    userId: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(ProfileHeader)