import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { goalRef } from '../firebase';
import {connect} from 'react-redux';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class  GoalList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal=> {
        let goalObject = goal.val();
        console.log('goal in goalList componentDidMount',goal );
        const serverKey = goal.key;
        const {email,title } = goalObject;
        goals.push({email,title,serverKey});
      })
      // console.log('goals in goalList componentDidMount',goals);
      this.props.setGoals(goals);
    })
  }

  render() {
    console.log("goals in reader, this.props.goals", this.props.goals);
    return (
      <div> {
        this.props.goals.map((goal,index)=> {
          return(
            <GoalItem  key={index} goal={goal}/>
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {goals} = state;
  return {
    goals,
  }
}

export default connect(mapStateToProps,{setGoals})(GoalList);
