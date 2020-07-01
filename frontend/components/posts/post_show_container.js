import { connect } from "react-redux"
import { fetchPost } from "../../actions/post_actions"
import PostShow from './post_show'


const mSTP = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId))
  }
}

export default connect(mSTP, mDTP)(PostShow)