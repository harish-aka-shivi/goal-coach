import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import firebaseApp from './firebase';

import {Router, Route,browserHistory } from 'react-router';
// import {createHistory} from 'history/createBrowserHistory'

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log("user has signed in or up", user);
  } else {
    console.log("user has signed out");
  }
})


ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App}/>
    <Route path="/signin" component={SignIn}/>
    <Route path ="/signup" component={SignUp}/>

  </Router>, document.getElementById('root')
)
