import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqsmwOpCMVC4aXaOVKb-S31a7RsHLj6e4",
    authDomain: "react-app-cursos-3a178.firebaseapp.com",
    projectId: "react-app-cursos-3a178",
    storageBucket: "react-app-cursos-3a178.appspot.com",
    messagingSenderId: "445600630715",
    appId: "1:445600630715:web:f5140d64f71ae756cd269e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}


