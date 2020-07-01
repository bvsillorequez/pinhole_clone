import { connect } from "react-redux"
import HomeIndex from "./home"
import { fetchPosts } from "../../actions/post_actions"

const mSTP = state => {
  return {
    posts: Object.values(state.entities.posts)
  }
}

const mDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}


export default connect(mSTP, mDTP)(HomeIndex)