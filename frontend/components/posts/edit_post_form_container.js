import { connect } from "react-redux"
import { fetchPost, updatePost, deletePost } from "../../actions/post_actions"
import EditPostForm from './edit_post_form'
import React from 'react'
import {openModal, closeModal} from '../../actions/modal_actions'


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
    action: post => dispatch(updatePost(post)),
    cancelModal: (
      <input type="button"
        className="cancel-button"
        value="Cancel"
        onClick={() => dispatch(openModal('cancel'))} />
    ),
    closeModal: () => dispatch(closeModal())
    
  }
}

export default connect(mSTP, mDTP)(EditPostForm)