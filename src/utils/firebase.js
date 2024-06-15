// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUVzVGWtmUo6QzrCipJnyABqADvkOPdjY",
  authDomain: "netflix-gpt-37f39.firebaseapp.com",
  projectId: "netflix-gpt-37f39",
  storageBucket: "netflix-gpt-37f39.appspot.com",
  messagingSenderId: "820647942331",
  appId: "1:820647942331:web:8b4d842d676e49e7cf319e",
  measurementId: "G-DS2SYC4LTP",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
const analytics = getAnalytics(app);
