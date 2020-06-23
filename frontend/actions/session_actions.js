import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
})

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err)))
)
export const logout = () => dispatch => (
  SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
)

export const signUp = (user) => dispatch => {
  debugger
  return (
    SessionApiUtil.signUp(user)
      .then(user=> dispatch(receiveCurrentUser(user)))
      .fail(err => dispatch(receiveErrors(err)))
  )
}