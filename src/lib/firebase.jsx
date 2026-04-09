import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBknGACfthTV7XlSdNw8X5azEw61sHyHDw",
  authDomain: "yads-b6254.firebaseapp.com",
  projectId: "yads-b6254",
  storageBucket: "yads-b6254.firebasestorage.app",
  messagingSenderId: "793719245640",
  appId: "1:793719245640:web:a6d1ae02dd661e7fec017d",
  measurementId: "G-1DPC941KLJ"
};
// Initialize Firebase (prevents multiple initialization errors)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { 
  app, 
  auth, 
  db, 
  storage, 
  googleProvider,
  // Auth methods
  signInWithPopup, 
  signOut,
  // Firestore methods
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  // Storage methods
  ref,
  uploadBytes,
  getDownloadURL
};