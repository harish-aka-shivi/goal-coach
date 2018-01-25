import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmIouSDO6SZ6Au4WzLDUciUfNzXYGZ-Qo",
    authDomain: "goal-coach-cabb5.firebaseapp.com",
    databaseURL: "https://goal-coach-cabb5.firebaseio.com",
    projectId: "goal-coach-cabb5",
    storageBucket: "",
    messagingSenderId: "414198265663"
  };

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
