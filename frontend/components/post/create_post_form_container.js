import { connect } from 'react-redux'
import PostForm from './post_form'
import React from 'react'

const mSTP = ({errors, entities}) => {
  return {
    errors: Object.values(errors.posts),
    post: {
      title: '',
      body: ''
    },
    formType: 'Create Post'
  }
}

const mDTP = dispatch => {
  return {
    action: post => dispatch(createPost(post))
  }
}

export default connect(mSTP, mDTP)(PostForm);