import {connect} from 'react-redux'
import { createLike, deleteLike } from '../../actions/like_actions'
import Like from './like'

const mSTP = (state, ownProps) => {
  return {
    like: state.entities.like,
    posts: state.entites.post,
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}

export default connect(mSTP, mDTP)(Like)