// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { ref, getDatabase } from 'firebase/database';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7OoV19z3bRtnfZCl-8kGDhBcCOoJsoTU",
  authDomain: "slack-clone-75d99.firebaseapp.com",
  projectId: "slack-clone-75d99",
  storageBucket: "slack-clone-75d99.appspot.com",
  messagingSenderId: "586397818243",
  appId: "1:586397818243:web:f100b305f9aa403a606ab6",
  measurementId: "G-B49QCY73E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, db, database };
export const serverStamp = firebase.firestore.Timestamp
