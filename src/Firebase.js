// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqzai6RX9hMahWlTbtiwXqzj-IMbQZOQ8",
  authDomain: "linkedin-clone-6dddb.firebaseapp.com",
  projectId: "linkedin-clone-6dddb",
  storageBucket: "linkedin-clone-6dddb.appspot.com",
  messagingSenderId: "294594683321",
  appId: "1:294594683321:web:7489ac17fbb107b3d49668",
  measurementId: "G-B53QRPD0MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export{app,db,auth}