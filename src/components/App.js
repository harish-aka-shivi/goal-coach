import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebaseApp from '../firebase';
import {connect} from 'react-redux';

class  App extends Component {
  render() {
    return(
      <div>App
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
  console.log('state in mapStateToProps is', state);
  return {}
}


export default connect(mapStateToProps,null)(App);
