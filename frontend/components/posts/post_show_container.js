import { connect } from "react-redux"
import { fetchPost } from "../../actions/post_actions"
import PostShow from './post_show'
import { createLike, deleteLike } from '../../actions/like_actions'


const mSTP = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    like: state.entities.like,
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    createLike: (userId, postId) => dispatch(createLike(userId, postId)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}

export default connect(mSTP, mDTP)(PostShow)