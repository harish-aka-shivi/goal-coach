import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {completeGoalRef, goalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from '../actions'

class CompleteGoalList extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email,title} = completeGoal.val();
        completeGoals.push({email, title});
        this.props.setCompleted(completeGoals);
      })
    })
  }

  render(){
    console.log('complete goald list , this.props.completeGoals', this.props.completeGoals);
    return(
      <div>empty</div>
    )
  }
}

function mapStateToProps(state) {
  const {completeGoals} = state;
  return {
    completeGoal,
  }
}

export default connect(mapStateToProps,setCompleted)(CompleteGoalList);
