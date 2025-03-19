import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBjni8sg3ZXJPHZbKxnpOEKJ__U5TRTMeQ",
  authDomain: "ai-interview-43a9e.firebaseapp.com",
  projectId: "ai-interview-43a9e",
  storageBucket: "ai-interview-43a9e.firebasestorage.app",
  messagingSenderId: "1041882995484",
  appId: "1:1041882995484:web:231ea18b70b8993569b8d9",
  measurementId: "G-VFY8P8XW51",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
console.log(db);
export { db };
