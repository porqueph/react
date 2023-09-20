// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKiqhdds681iwjnoGUR6pCJVPnNMTyV-8",
  authDomain: "miniblog-b524e.firebaseapp.com",
  projectId: "miniblog-b524e",
  storageBucket: "miniblog-b524e.appspot.com",
  messagingSenderId: "378425446956",
  appId: "1:378425446956:web:857aabc8551ac3517df789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)


export { db };