import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp, goalRef } from './firebase';
import {Router, Route,browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import {logUser} from './actions'

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import {createHistory} from 'history/createBrowserHistory'

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log("user has signed in or up", user);
    console.log('signin listener, store is ',store);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
    console.log("user has signed out");
    browserHistory.replace('/signin');
  }
})


ReactDOM.render(
  <Provider store = {store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App}/>
      <Route path="/signin" component={SignIn}/>
      <Route path ="/signup" component={SignUp}/>
    </Router>
  </Provider>, document.getElementById('root')
)
