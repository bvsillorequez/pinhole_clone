import { connect } from "react-redux"
import HomeIndex from "./home"
import { fetchPosts } from "../../actions/post_actions"
import { createLike, deleteLike } from '../../actions/like_actions'

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts),
    like: state.entities.like,
    session: state.session.id
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (userId, postId) => dispatch(createLike(userId, postId)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
  }
}


export default connect(mSTP, mDTP)(HomeIndex)