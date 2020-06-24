import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div>
        <h3>Hello, This Part Won't be here later{this.props.currentUser.username}</h3>
        <button onClick={this.props.logout}>Logout</button>
        Profile
        Logout
      </div>
    )
  }

  isLoggedOut() {
    return (
      <div>
        <Link to='/login' className='header_comps'>Log in</Link>
        <Link to='/signup' className='header_comps sign_up'>Sign up</Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? this.isLoggedIn() : this.isLoggedOut()}
      </div>
    )
  }
}

export default Header;