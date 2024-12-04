// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Wrn5VW4ywzSRXrf7M4G7Uk22pdlY3sU",
  authDomain: "hackaton-a8809.firebaseapp.com",
  projectId: "hackaton-a8809",
  storageBucket: "hackaton-a8809.firebasestorage.app",
  messagingSenderId: "282046311322",
  appId: "1:282046311322:web:e3c4363aeaf02617b86823",
  measurementId: "G-20L0HZ5DDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);