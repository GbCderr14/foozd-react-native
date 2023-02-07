// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyACsqGTV6nzUtbmCtVdqdoNJvGkBvRRsaI",
  authDomain: "users-8c704.firebaseapp.com",
  databaseURL: "https://users-8c704-default-rtdb.firebaseio.com",
  projectId: "users-8c704",
  storageBucket: "users-8c704.appspot.com",
  messagingSenderId: "432545114834",
  appId: "1:432545114834:web:3ac5d338e3819fb7e25b0b",
  measurementId: "G-FBCZQCTF1J"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
export {firebase};