import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { login, logout, signUp } from './util/session_api_util' 

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const closeDropdown = (e) => {
    // debugger
    if(e.target.className !== '#profilepointer') {
      $('#profiledropdown').removeClass('trigger')
    }
  } 
  // $(window).on('click', closeDropdown)
  document.addEventListener('click', closeDropdown)

  ReactDOM.render(<Root store={store}/>, root);


  // DELETE LATER ONLY FOR TESTING
  window.login = login
  window.logout = logout
  window.signUp = signUp
  window.getState = store.getState
  window.dispatch = store.dispatch
});