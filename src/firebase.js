import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDKuJpE1ROedr2DOHK8VT20EhEcduOe4js",
  authDomain: "chat-4e1f4.firebaseapp.com",
  projectId: "chat-4e1f4",
  storageBucket: "chat-4e1f4.appspot.com",
  messagingSenderId: "334326522003",
  appId: "1:334326522003:web:c5d0649eacb515f821ed66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();