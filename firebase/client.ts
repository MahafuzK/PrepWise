
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrEeW-P4mSxagjxti4k3jV2gp0K-dypc0",
  authDomain: "prespwise.firebaseapp.com",
  projectId: "prespwise",
  storageBucket: "prespwise.firebasestorage.app",
  messagingSenderId: "439378506316",
  appId: "1:439378506316:web:9d9a71934bf802f1817ae9",
  measurementId: "G-SF5QJFP8P7"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
