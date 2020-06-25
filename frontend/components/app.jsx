import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import HeaderContainer from "./header/header_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Navbar from './navbar/navbar'
import FrontPage from './front_page'
import HomeFeed from './home_feed'

const App = (props) => {
  return (
    <div>
      <header className="inner_header">
        <li><Navbar/></li>
        <li><HeaderContainer/></li>
      </header>
      <Switch>
        <ProtectedRoute exact path="/home" component={HomeFeed}/>
        <AuthRoute exact path="/" component={FrontPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  )
};

export default App;