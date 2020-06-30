import * as PostAPIUtils from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receivePosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPosts = () => dispatch => {
  return PostAPIUtils.fetchPosts().then(posts => {
    dispatch(receivePosts(posts))})
}

export const fetchPost = postId => dispatch => {
  return PostAPIUtils.fetchPost(postId).then(post => dispatch(receivePost(post)))
}

export const createPost = post => dispatch => {
  return PostAPIUtils.createPost(post)
    .then(createPost => {
      dispatch(receivePost(createPost))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err)))
}

export const updatePost = post => dispatch => (
  PostAPIUtils.updatePost(post)
    .then(updatePost => {
      dispatch(receivePost(updatePost))
      dispatch(clearErrors())})
    .fail(err => dispatch(receiveErrors(err)))
)

export const deletePost = postId => dispatch => (
  PostAPIUtils.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)