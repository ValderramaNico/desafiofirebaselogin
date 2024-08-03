// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAi2VtbUA3klXAnOw15Y3emcuivrD_yPI",
  authDomain: "desafiologin-59800.firebaseapp.com",
  projectId: "desafiologin-59800",
  storageBucket: "desafiologin-59800.appspot.com",
  messagingSenderId: "329204424612",
  appId: "1:329204424612:web:11ff911f37956ce382eb31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

export default app;
