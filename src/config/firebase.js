import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDoz9MgEnszwmJW1GW9WWxMOairlOxvGrQ",
  authDomain: "funny-movies-2020.firebaseapp.com",
  databaseURL: "https://funny-movies-2020.firebaseio.com",
  projectId: "funny-movies-2020",
  storageBucket: "funny-movies-2020.appspot.com",
  messagingSenderId: "49339191779",
  appId: "1:49339191779:web:93725a8202df8e60f310d6",
  measurementId: "G-0X1MTJ65EE"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
