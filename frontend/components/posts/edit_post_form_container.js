import { connect } from "react-redux"
import { fetchPost, updatePost, deletePost } from "../../actions/post_actions"
import EditPostForm from './edit_post_form'


const mSTP = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.posts),
    post: state.entities.posts[ownProps.match.params.postId],
    session: state.session.id,
    formType: 'Edit Post'
  }
}

const mDTP = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    action: post => dispatch(updatePost(post))
  }
}

export default connect(mSTP, mDTP)(EditPostForm)