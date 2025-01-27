// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCCe7rbPK9I4Xxk_r86Qs2exxL7XTyXOrA",
//   authDomain: "saudi-arabia-tourism-af688.firebaseapp.com",
//   projectId: "saudi-arabia-tourism-af688",
//   storageBucket: "saudi-arabia-tourism-af688.firebasestorage.app",
//   messagingSenderId: "233129840437",
//   appId: "1:233129840437:web:9bf2ef9936a54e51e1867c"
// };

// // Initialize Firebase
// export const FIREBASE_APP= initializeApp(firebaseConfig);
// export const FIREBASE_AUTH= initializeApp(FIREBASE_APP);
// export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCe7rbPK9I4Xxk_r86Qs2exxL7XTyXOrA",
  authDomain: "saudi-arabia-tourism-af688.firebaseapp.com",
  projectId: "saudi-arabia-tourism-af688",
  storageBucket: "saudi-arabia-tourism-af688.firebasestorage.app",
  messagingSenderId: "233129840437",
  appId: "1:233129840437:web:9bf2ef9936a54e51e1867c"
};

const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const db = getFirestore(app);

export { signInWithEmailAndPassword, createUserWithEmailAndPassword };
