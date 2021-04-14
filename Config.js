import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB7R-3dCTHL6EwPZRnBJENMprPp4myWz10",
    authDomain: "language-learner-a6e3e.firebaseapp.com",
    databaseURL: "https://language-learner-a6e3e-default-rtdb.firebaseio.com",
    projectId: "language-learner-a6e3e",
    storageBucket: "language-learner-a6e3e.appspot.com",
    messagingSenderId: "921008654216",
    appId: "1:921008654216:web:acc9a3759ad87a4d4e1c3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()