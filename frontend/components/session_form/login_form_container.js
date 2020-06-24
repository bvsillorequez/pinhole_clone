import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login, clearErrors } from '../../actions/session_actions'

const mSTP = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.session),
    formType: 'login'
  }
}

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm);