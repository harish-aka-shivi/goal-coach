import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {completeGoalRef, goalRef} from '../firebase';
import {connect} from 'react-redux';


class GoalItem extends Component {
  constructor(props) {
    super(props)
  }

  completeGoals()  {
    //add to complete goals
    // remove
    const {email} = this.props.user;
    const {title,serverKey} = this.props.goal;
    // console.log("In goalItem , email is", email, 'and title is ', title);
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email,title});
  }

  render() {
    const { email, title } = this.props.goal;
    return(
      <div style={{margin:'5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight:'5px'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={()=>this.completeGoals()}>
            Complete
          </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}

export default connect(mapStateToProps,null)(GoalItem);
