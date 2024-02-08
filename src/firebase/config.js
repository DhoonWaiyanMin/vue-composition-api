// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import  firebase  from "firebase/app";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAPC7MadBYv65bFTX3wmW-zVRKt0JcSDnU",
//   authDomain: "vue-blog-system-7ca56.firebaseapp.com",
//   projectId: "vue-blog-system-7ca56",
//   storageBucket: "vue-blog-system-7ca56.appspot.com",
//   messagingSenderId: "27380129501",
//   appId: "1:27380129501:web:028f51e415b72189bb4534"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// db setup 
// let db = firebase.firestore();

// export {app}

import  firebase  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPC7MadBYv65bFTX3wmW-zVRKt0JcSDnU",
  authDomain: "vue-blog-system-7ca56.firebaseapp.com",
  projectId: "vue-blog-system-7ca56",
  storageBucket: "vue-blog-system-7ca56.appspot.com",
  messagingSenderId: "27380129501",
  appId: "1:27380129501:web:028f51e415b72189bb4534"
};

// firebase init 
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db , timestamp }