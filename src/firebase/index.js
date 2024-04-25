// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? "",
  authDomain: "chouquette-chocolates.firebaseapp.com",
  projectId: "chouquette-chocolates",
  storageBucket: "chouquette-chocolates.appspot.com",
  messagingSenderId: "683838679868",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export const auth = getAuth(app);
export { signInWithEmailAndPassword };
