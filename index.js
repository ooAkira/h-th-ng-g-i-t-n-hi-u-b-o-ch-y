import { initializeApp } from 'firebase/app';
import { getFirestore, doc ,getDoc } from "firebase/firestore";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4R7DhdtBr8a7wdNc9k8njx2a3Qb6m8-U",
    authDomain: "t2patrol.firebaseapp.com",
    databaseURL: "https://t2patrol-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "t2patrol",
    storageBucket: "t2patrol.appspot.com",
    messagingSenderId: "320311874545",
    appId: "1:320311874545:web:9e468936a06bdaec0b6a50"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  console.log(db)
  console.log("hi")

  