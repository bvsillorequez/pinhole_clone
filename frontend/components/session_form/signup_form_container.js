import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signUp } from '../../actions/session_actions'

const mSTP = (state) => {
  // debugger
  return {
    errors: Object.values(state.errors.session),
    formType: 'signup'
  }
}

const mDTP = (dispatch) => {
  return {
    processForm: user => dispatch(signUp(user))
  }
}

export default connect(mSTP, mDTP)(SessionForm);