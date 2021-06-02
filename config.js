import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAx5La0S-59sIDrM6RJH3SgAFAffan3uFs",
  authDomain: "story-hub-7bc34.firebaseapp.com",
  projectId: "story-hub-7bc34",
  storageBucket: "story-hub-7bc34.appspot.com",
  messagingSenderId: "405777470426",
  appId: "1:405777470426:web:2fbb9398a88929b82ce6e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()             