import React from 'react'
import {Link} from 'react-router-dom'


const ProfileDropdown = ({logout, userId}) => {
  const triggerDropdown = () => {
    $('#profiledropdown').toggleClass('trigger')
  }

  return (
    <div id="profilepointer" onClick={triggerDropdown}>
      <div >
        <i className="fas fa-user-alt fa-lg"></i>
      </div>
      <ul id="profiledropdown">
        <li><Link to={`/user/${userId.id}`} className="profileLink">Profile</Link></li>
        <li><Link to={`/posts`} className="profileLink">Galleries</Link></li>
        {/* <li><Link to={`/users/`} className="profileLink">Liked photos</Link></li> */}
        <br/>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}

export default ProfileDropdown