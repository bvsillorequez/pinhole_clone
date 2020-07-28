import * as LikeAPIUtils from '../util/like_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
})

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
})

export const createLike = like => dispatch => {
  return LikeAPIUtils.createLike(like)
    .then(createLike => {
      dispatch(receiveLike(createLike))
    })
}

export const deleteLike = likeId => dispatch => {
  return LikeAPIUtils.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
}