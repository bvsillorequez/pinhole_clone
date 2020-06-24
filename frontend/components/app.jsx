import React from "react";
import { Route } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import HeaderContainer from "./header/header_container";
import { AuthRoute } from '../util/route_util'
import Navbar from './navbar/navbar'

const App = () => (
  <div>
    <header className="inner_header">
      {/* <li><h1 className="pinhole_header">Pinhole</h1></li> */}
      <li><Navbar/></li>
      <li><HeaderContainer/></li>
    </header>
  
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;