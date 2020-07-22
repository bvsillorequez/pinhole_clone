import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../profile_dropdown/profile_dropdown'

class Header extends React.Component {
  isLoggedIn() {
    return (
      <div>
        <ProfileDropdown logout={this.props.logout} userId={this.props.currentUser}/>
        <i className="far fa-paper-plane fa-lg"></i>
        <i className="far fa-bell fa-lg"></i>
        <Link to='/upload' className='header_comps sign_up'>Upload</Link>
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