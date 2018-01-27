import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class  App extends Component {
  render() {
    return(
      <div  style = {{margin:'3%'}}>
        <h3> Goals Coach </h3>
        <AddGoal />
        <hr/>
        <h4>Goals</h4>
        <GoalList/>
        <hr/>
        <h4>Completed Goals</h4>
        <CompleteGoalList/>
        <hr/>
        <button
          style = {{margin:'3%'}}
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
