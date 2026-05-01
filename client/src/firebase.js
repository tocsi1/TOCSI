import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBw8bOTI5aOEXTuXcZhcu1sTw-3fl0g9pI",
    authDomain: "tocsi-fb258.firebaseapp.com",
    projectId: "tocsi-fb258",
    storageBucket: "tocsi-fb258.firebasestorage.app",
    messagingSenderId: "872997426606",
    appId: "1:872997426606:web:3f769e93c49f532040a43f",
    measurementId: "G-WNZNS87GTB"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);