import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyATBvpx9IhPH45zyNnPjzM1BdunY5JsJeo",
    authDomain: "idegin-1bf5f.firebaseapp.com",
    databaseURL: "https://idegin-1bf5f.firebaseio.com",
    projectId: "idegin-1bf5f",
    storageBucket: "idegin-1bf5f.appspot.com",
    messagingSenderId: "665622502046",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-SX5DGDXMYG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
