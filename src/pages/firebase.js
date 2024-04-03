import  firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyC0z5gTYET5XWVPHp6VhcoQ5c7v4qPU_xY",
    authDomain: "e-shop-461e0.firebaseapp.com",
    projectId: "e-shop-461e0",
    storageBucket: "e-shop-461e0.appspot.com",
    messagingSenderId: "899827481903",
    appId: "1:899827481903:web:6215c2cdecf96915abf5da",
    measurementId: "G-86C0GEHZQ8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth()
  export {db,auth};