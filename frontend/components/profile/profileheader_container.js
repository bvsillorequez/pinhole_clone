import {connect} from 'react-redux'
import ProfileHeader from './profileheader'
import { fetchUser } from '../../actions/profile_actions'
import { fetchPosts } from '../../actions/post_actions'
import { fetchLikes, createLike, deleteLike } from '../../actions/like_actions'

const mSTP = (state,ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    like: Object.values(state.entities.like),
    posts: Object.values(state.entities.posts),
    session: state.session.id
  }
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (userId, postId) => dispatch(createLike(userId, postId)),
  deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(ProfileHeader)