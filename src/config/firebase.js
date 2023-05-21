// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHPPZ7_gQA7Vj5NNoRxSONuUu0jwytP4U",
  authDomain: "chatapp-9754d.firebaseapp.com",
  projectId: "chatapp-9754d",
  storageBucket: "chatapp-9754d.appspot.com",
  messagingSenderId: "145364826812",
  appId: "1:145364826812:web:72dc0d45e9a78022d32eb9",
  measurementId: "G-X5P1TEPVSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const provider = new GoogleAuthProvider()
export const  auth = getAuth(app)
export const db = getFirestore(app)