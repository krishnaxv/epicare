import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC3VPIcZ5Mz-Zv9Tn44SjJNwRFa1yKdAMY',
  authDomain: 'epicare-dev.firebaseapp.com',
  databaseURL: 'https://epicare-dev.firebaseio.com',
  projectId: 'epicare-dev',
  storageBucket: 'epicare-dev.appspot.com',
  messagingSenderId: '1072790695587'
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth;
export const firebaseRef = firebase.database().ref();
