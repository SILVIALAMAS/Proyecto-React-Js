/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad para todos, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5KfaCuMSZ0fhd6q9xG2cWLIdOneBsoew",
  authDomain: "mi-proyecto-react-57166.firebaseapp.com",
  projectId: "mi-proyecto-react-57166",
  storageBucket: "mi-proyecto-react-57166.firebasestorage.app",
  messagingSenderId: "828115643643",
  appId: "1:828115643643:web:4c2ce579d96952a37b145e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };
