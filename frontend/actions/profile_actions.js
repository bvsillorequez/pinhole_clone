import * as ProfileApiUtil from '../util/profile_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = (user) => dispatch => {
  return (
    ProfileApiUtil.fetchUser(user).then(user => dispatch(receiveUser(user)))
  )
}