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
          <a href="https://github.com/bvsillorequez">GitHub</a>
          <a href="http://www.linkedin.com/in/bsillo">LinkedIn</a>
        </div>
      </div>
    )
  }
}