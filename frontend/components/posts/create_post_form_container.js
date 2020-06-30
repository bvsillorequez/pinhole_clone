import React from 'react'
import { connect } from 'react-redux'
import PostForm from './post_form'
import {createPost} from '../../actions/post_actions'
import { openModal, closeModal} from '../../actions/modal_actions'

const mSTP = ({errors, session}) => {
  // debugger
  return {
    errors: Object.values(errors.posts),
    post: {
      title: '',
      body: '',
      user_id: session.id,
    },
    formType: 'Create Post'
  }
}

const mDTP = dispatch => {
  return {
    action: post => dispatch(createPost(post)),
    cancelModal: (
      <input type="button"
        className="cancel-button"
        value= "Cancel"
        onClick={() => dispatch(openModal('cancel'))}/>
    ),
    removeModal: () => dispatch(openModal('remove')),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(PostForm);