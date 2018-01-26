import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { goalRef } from '../firebase';
import {connect} from 'react-redux';
import { setGoals } from '../actions';

class  GoalList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal=> {
        let goalObject = goal.val();
        const {email,title } = goalObject;
        goals.push({email,title});
      })
      // console.log('goals in goalList componentDidMount',goals);
      this.props.setGoals(goals);
    })
  }

  render() {
    console.log("goals in reader, this.props.goals", this.props.goals);
    return (
      <div>GoalList</div>
    )
  }
}

function mapStateToProps(state) {
  const {goals} = state;
  return {
    goals,
  }
}

export default connect(null,{setGoals})(GoalList);
