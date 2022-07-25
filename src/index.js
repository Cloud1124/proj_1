// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYcGHTp4sNGpYzJi-dTS95jDAKnFcfFL0",
  authDomain: "fir-b8439.firebaseapp.com",
  projectId: "fir-b8439",
  storageBucket: "fir-b8439.appspot.com",
  messagingSenderId: "450554174779",
  appId: "1:450554174779:web:f5386e6aa587e4d230eb1e",
  measurementId: "G-STX8LHTDB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)