import {connect} from 'react-redux'
import ProfileHeader from './profileheader'
import { fetchUser } from '../../actions/profile_actions'
import { fetchPosts } from '../../actions/post_actions'

const mSTP = (state,ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    session: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(ProfileHeader)