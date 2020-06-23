import { Route, NavLink } from 'react-router-dom';
import React from 'react'

export default class Navbar extends React.Component{
  render() {
    return (
      <div>
        <h1 className="pinhole_header">
          <NavLink to='/'>PINHOLE</NavLink>
        </h1>
        <div className="navbar">
          <NavLink to='/' >Discover</NavLink>
          <NavLink to='/' >Licensing</NavLink>
          <NavLink to='/' >Memberships</NavLink>
          <NavLink to='/' >Quests</NavLink>
          <NavLink to='/' >Create Stories</NavLink>
          <NavLink to='/' >Blog</NavLink>
        </div>
      </div>
    )
  }
}