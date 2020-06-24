import React from 'react'
import {Link} from 'react-router-dom'


const ProfileDropdown = ({logout}) => {
  const triggerDropdown = () => {
    $('#profiledropdown').toggleClass('trigger')
  }

  return (
    <div id="profilepointer" onClick={triggerDropdown}>
      <div >
        ProfileImage

      </div>
      <ul id="profiledropdown">
        <li><Link to={`/api/users/user.id`} className="profileLink">Profile</Link></li>
        <li><Link to={`/api/users/`} className="profileLink">Galleries</Link></li>
        <li><Link to={`/api/users/`} className="profileLink">Liked photos</Link></li>
        <br/>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}

export default ProfileDropdown






// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'

// class ProfileDropdown extends React.Component{
//  render () {
//    return (
//      <Navbar>
//        <NavItem icon="X" >
//           <DropdownMenu/>
//        </NavItem>
//      </Navbar>
//    )
//  }
// }

// export default ProfileDropdown;

// export const DropdownMenu = () => {

//   function DropdownItem(props){
//     return (
//       <a href="#" className="menu-item">
//         {props.children}
//       </a>
//     )
//   }
//   return (
//     <div className="dropdown">
//       <DropdownItem>Profile</DropdownItem>
//       <DropdownItem>Logout</DropdownItem>
//     </div>
//   )
// }

// export const Navbar = (props) => {
//   return (
//     <nav className="nbar">
//       <ul className="nbar-n">{props.children}</ul>
//     </nav>
//   )
// }

// export const NavItem = (props) => {
//   const  [open, setOpen] = useState(false);

//   return (
//     <li className='n-item'>
//       <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   )
// }