import {connect} from 'react-redux'
import ProfileHeader from './profileheader'
import { fetchUser } from '../../actions/profile_actions'

const mSTP = state => {
  return {
    user: state.entities.user,
    userId: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(ProfileHeader)