import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login, clearErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'login'
  }
}

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);