// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyAxN1nFfShMna-Rv2liWV9Hvb4GoDl6rac",
    authDomain: "task-manager-e1b9c.firebaseapp.com",
    projectId: "task-manager-e1b9c",
    storageBucket: "task-manager-e1b9c.firebasestorage.app",
    messagingSenderId: "421192598597",
    appId: "1:421192598597:web:925bf70b321142432bcf2c",
    measurementId: "G-2LYNCP0CV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Authentication service
const db = getFirestore(app);  // Firestore service

// Export Firebase services for use in other files
export { auth, db };
