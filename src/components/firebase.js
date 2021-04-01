import firebase from 'firebase'



  var firebaseConfig = {
    apiKey: "AIzaSyA9XFo95zdC82kJz_r3Xc3B3i00QLnsmaA",
    authDomain: "phil-react-portfolio-6c322.firebaseapp.com",
    databaseURL: "https://phil-react-portfolio-6c322-default-rtdb.firebaseio.com",
    projectId: "phil-react-portfolio-6c322",
    storageBucket: "phil-react-portfolio-6c322.appspot.com",
    messagingSenderId: "1049352584147",
    appId: "1:1049352584147:web:654f04cc68600a10c4cd26",
    measurementId: "G-KF92G0JY8M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const db = firebase.firestore()