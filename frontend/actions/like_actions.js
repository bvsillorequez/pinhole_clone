import * as LikeAPIUtils from '../util/like_api_util'

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const receiveAllLikes = likes => {
  return ({
    type: RECEIVE_ALL_LIKES,
    likes
  })
}
const receiveLike = likeData => {
  return ({
    type: RECEIVE_LIKE,
    id: likeData.id,
    user: likeData.user_id,
    post: likeData.post_id
  })
}

const removeLike = likeId => {
  return ({
    type: REMOVE_LIKE,
    likeId
  })
}

export const fetchLikes = () => dispatch => {
  return LikeAPIUtils.fetchLikes().then(likes => {
    dispatch(receiveAllLikes(likes))
  })
}

export const fetchLike = likeId => dispatch => {
  return LikeAPIUtils.fetchLike(likeId).then(like => {
    dispatch(receiveLike(like))
  })
}

export const createLike = (userId, postId) => dispatch => {
  
  return LikeAPIUtils.createLike(userId, postId)
    .then(createLike => {
      dispatch(receiveLike(createLike))
    })
}

export const deleteLike = likeId => dispatch => {
  
  return LikeAPIUtils.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
}