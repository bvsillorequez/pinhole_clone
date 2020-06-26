import { connect } from "react-redux"
import { fetchPost, updatePost } from "../../util/post_api_util"
import PostShow from './post_show'


const mSTP = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.postId]
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId))
  }
}

export default connect(mSTP, mDTP)(PostShow)