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
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render(){
    console.log('complete goald list , this.props.completeGoals', this.props);
    return(
      <div>
        {
        this.props.completeGoals.map((completeGoal,index) => {
          const {title,email} = completeGoal;
          return (
            <div key={index}>
              <strong>{title}</strong> Completed by <em>{email}</em>
            </div>
          )
        })
        }
        <button className="btn btn-primary"
          onClick={()=> this.clearCompleted()}> Clear All</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {completeGoals} = state;
  console.log("funtion map mapStateToProps in CompleteGoalList, state is => ", state,"completeGoal are", completeGoals);

  return {
    completeGoals
  }
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalList);
