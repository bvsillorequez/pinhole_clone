import { connect } from 'react-redux'
import PostForm from './post_form'
import {createPost} from '../../actions/post_actions'

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
  // debugger
  return {
    action: post => dispatch(createPost(post))
  }
}

export default connect(mSTP, mDTP)(PostForm);