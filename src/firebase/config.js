import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAq6cK02OpLQ0eTL-JdHHcS-LrmjIHC92E",
  authDomain: "imgbum-382e4.firebaseapp.com",
  databaseURL: "https://imgbum-382e4-default-rtdb.firebaseio.com",
  projectId: "imgbum-382e4",
  storageBucket: "imgbum-382e4.appspot.com",
  messagingSenderId: "646460461721",
  appId: "1:646460461721:web:3ac3c89d873fbef8405e08"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };