// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-5wTPmkwIhJgZbwraP_WU3CsBo_OokCM",
  authDomain: "dragon-news-d80ce.firebaseapp.com",
  projectId: "dragon-news-d80ce",
  storageBucket: "dragon-news-d80ce.appspot.com",
  messagingSenderId: "1095733220396",
  appId: "1:1095733220396:web:ae192c378ddd386d6c2d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;