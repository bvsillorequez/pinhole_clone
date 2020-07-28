import * as LikeAPIUtils from '../util/like_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const receiveLike = likeData => {
  return ({
    type: RECEIVE_LIKE,
    id: likeData.id,
    user: likeData.user_id,
    post: likeData.post_id
  })
}

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
})

export const createLike = (userId, postId) => dispatch => {
  debugger
  return LikeAPIUtils.createLike(userId, postId)
    .then(createLike => {
      dispatch(receiveLike(createLike))
    })
}

export const deleteLike = likeId => dispatch => {
  return LikeAPIUtils.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
}