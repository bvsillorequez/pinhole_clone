import { connect } from "react-redux"
import { fetchPost, updatePost } from "../../util/post_api_util"
import EditPostForm from './edit_post_form'


const mSTP = (state, ownProps) => {
  return {
    errors: Object.values(errors.posts),
    post: state.posts[ownProps.match.params.postId],
    formType: 'Edit Post'
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    action: post => dispatch(updatePost(post))
  }
}

export default connect(mSTP, mDTP)(EditPostForm)