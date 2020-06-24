import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signUp, clearErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
import React from 'react'

const mSTP = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'signup'
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: user => dispatch(signUp(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mSTP, mDTP)(SessionForm);