import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-dRTtPHghZXi-pyHQoNeTauqRkRIo4OA",
  authDomain: "chatbackend-7a528.firebaseapp.com",
  projectId: "chatbackend-7a528",
  storageBucket: "chatbackend-7a528.appspot.com",
  messagingSenderId: "564966320929",
  appId: "1:564966320929:web:df9ef8c669b5c3c009ac60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()