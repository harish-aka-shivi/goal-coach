import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class  App extends Component {
  render() {
    return(
      <div>
        <h3> Goals </h3>
        <AddGoal />
        <GoalList/>
        <button
          style = {{margin:'5%'}}
          className="btn btn-danger"
          onClick={()=>this.signOut()}> Sign Out</button>

      </div>
    )
  }

  signOut() {
    firebaseApp.auth().signOut();
  }
}

function mapStateToProps(state) {
  console.log('state in mapStateToProps of App is', state);
  return {}
}


export default connect(mapStateToProps,null)(App);
