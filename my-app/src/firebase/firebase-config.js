// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBFgKqLNEz3ZscRTh5zNRsCiL8tZmzRsMY",
  authDomain: "learn-firebase-52782.firebaseapp.com",
  projectId: "learn-firebase-52782",
  storageBucket: "learn-firebase-52782.appspot.com",
  messagingSenderId: "475712489917",
  appId: "1:475712489917:web:4195cff984adff841c2ad4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // khởi tạo firebase
// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
