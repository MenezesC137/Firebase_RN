import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-1SWaWZbbjPVHIkHqbrWRWJNiyiurv0Y",

  authDomain: "fir-basic-ad266.firebaseapp.com",

  databaseURL: "https://fir-basic-ad266-default-rtdb.firebaseio.com",

  projectId: "fir-basic-ad266",

  storageBucket: "fir-basic-ad266.appspot.com",

  messagingSenderId: "54289894383",

  appId: "1:54289894383:web:20b17492ac90ace9eb841a",
};

// Initialize Firebase
if (!firebase.apps.length) {
  // open the connection
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
