// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66h-8shJaw2y-IQqGM47k5563DMj9YfE",
  authDomain: "dragon-news-auth-385ff.firebaseapp.com",
  projectId: "dragon-news-auth-385ff",
  storageBucket: "dragon-news-auth-385ff.firebasestorage.app",
  messagingSenderId: "68472845868",
  appId: "1:68472845868:web:87d16a2a84a2fe70614389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
