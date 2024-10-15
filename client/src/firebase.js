// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a3b27.firebaseapp.com",
  projectId: "mern-blog-a3b27",
  storageBucket: "mern-blog-a3b27.appspot.com",
  messagingSenderId: "88186479299",
  appId: "1:88186479299:web:3f87b15ba0303174627876"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);