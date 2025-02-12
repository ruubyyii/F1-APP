import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7x3Qstk7D7wguz1w44uFHbFNhBISTZ1E",
    authDomain: "f1-app-f5e49.firebaseapp.com",
    projectId: "f1-app-f5e49",
    storageBucket: "f1-app-f5e49.firebasestorage.app",
    messagingSenderId: "929839820917",
    appId: "1:929839820917:web:1183c1f3cf1825ca25483c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };