// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPdHrExifgekAt_af4w9WvYD9jz_nw66k",
  authDomain: "otp-project-72c22.firebaseapp.com",
  projectId: "otp-project-72c22",
  storageBucket: "otp-project-72c22.appspot.com",
  messagingSenderId: "24807547856",
  appId: "1:24807547856:web:5d5983d1957af984aacfd5",
  measurementId: "G-RGV9LF0Q9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);
