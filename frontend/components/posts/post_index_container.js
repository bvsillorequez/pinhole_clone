import { connect } from "react-redux"
import PostIndex from "./post_index"
import { fetchPosts } from "../../actions/post_actions"
import { createLike, deleteLike } from '../../actions/like_actions'

const mSTP = state => {
  debugger
  return {
    posts: Object.values(state.entities.posts),
    like: state.entities.like,
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),

    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}


export default connect(mSTP, mDTP)(PostIndex)