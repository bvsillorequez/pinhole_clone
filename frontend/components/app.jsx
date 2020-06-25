import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import HeaderContainer from "./header/header_container";
import { AuthRoute } from '../util/route_util'
import Navbar from './navbar/navbar'
import FrontPage from './front_page'

const App = () => (
  <div>
    <header className="inner_header">
      <li><Navbar/></li>
      <li><HeaderContainer/></li>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={FrontPage}/>
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;