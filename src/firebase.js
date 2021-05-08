// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBLVesI-cuDG4BxGOwy7A-YKXE4V8_a3SU",
    authDomain: "clone-216bc.firebaseapp.com",
    projectId: "clone-216bc",
    storageBucket: "clone-216bc.appspot.com",
    messagingSenderId: "279097349323",
    appId: "1:279097349323:web:7c7b9b7f041d45eb1c774e",
    measurementId: "G-ZCBFH9QY34"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};