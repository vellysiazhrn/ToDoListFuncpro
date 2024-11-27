// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBpUXeWb_PWDmcEs70oihZWUesdLyTN8",
  authDomain: "todolist-4e194.firebaseapp.com",
  projectId: "todolist-4e194",
  storageBucket: "todolist-4e194.firebasestorage.app",
  messagingSenderId: "158218456435",
  appId: "1:158218456435:web:91527dde412d129338c906",
  measurementId: "G-LG87QZBRS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);