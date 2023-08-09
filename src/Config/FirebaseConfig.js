// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "redux-firebase";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoEefi0llVarJYgtDleis3FOLqJYnlSSk",
  authDomain: "book-10c47.firebaseapp.com",
  projectId: "book-10c47",
  storageBucket: "book-10c47.appspot.com",
  messagingSenderId: "699058222267",
  appId: "1:699058222267:web:ffe76f58d473d330a6259e",
  measurementId: "G-16F836FDHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
