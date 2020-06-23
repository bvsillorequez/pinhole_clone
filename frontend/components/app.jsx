import React from "react";
import { Route } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import HeaderContainer from "./header/header_container";
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1 className="pinhole_header">Pinhole</h1>
      <HeaderContainer className="header_comps"/>
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;