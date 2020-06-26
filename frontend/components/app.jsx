import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container'
import HeaderContainer from "./header/header_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Navbar from './navbar/navbar'
import FrontPage from './front_page'
import HomeFeed from './home_feed'
import PostIndexContainer from './posts/post_index_container'
import PostShowContainer from './posts/post_show_container'
import EditPostContainer from './posts/edit_post_form_container'


const App = () => {
  return (
    <div>
      <header className="inner_header">
        <li><Navbar/></li>
        <li><HeaderContainer/></li>
      </header>
      <Switch>
        <ProtectedRoute exact path="/home" component={HomeFeed}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={FrontPage} />

        {/* <ProtectedRoute exact path="/upload" component={} /> */}
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
        <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
        <ProtectedRoute exact path="/posts/:postId/edit" component={EditPostContainer} />

        <Redirect to='/' />
        <Route path="/" component={FrontPage} />
      </Switch>
    </div>
  )
};

export default App;