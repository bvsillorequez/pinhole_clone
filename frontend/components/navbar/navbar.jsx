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
          <NavLink to='/' >GitHub</NavLink>
          <NavLink to='/' >Link</NavLink>
          <NavLink to='/' >Link</NavLink>
        </div>
      </div>
    )
  }
}