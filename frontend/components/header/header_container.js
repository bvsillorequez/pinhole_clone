import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import Header from './header'

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)