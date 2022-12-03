import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = require('./AppConfig.json');

// Firebase 
export const firebase_app = firebase.initializeApp({

    apiKey: "AIzaSyCbRKDUUPAqph2p-E6RQcKSqno6sNUCbPw",
  authDomain: "fir-a8995.firebaseapp.com",
  projectId: "fir-a8995",
  storageBucket: "fir-a8995.appspot.com",
  messagingSenderId: "793639809688",
  appId: "1:793639809688:web:516f32a74a4ef44a3a96ed", 
  measurementId: "G-WL2J4PQXQH"
  
});
  
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const db = firebase.firestore();


// Auth0
export const auth0 = ({
    domain: config.auth0.domain,
    clientId: config.auth0.clientID,
    redirectUri: config.auth0.redirectUri
});

// Jwt
export const Jwt_token = config.jwt_token;


