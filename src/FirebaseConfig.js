// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5DR1V_CsBsMBbyIHPdSd4LJfiuRPrbc4",
  authDomain: "primevideoclone-21dfc.firebaseapp.com",
  projectId: "primevideoclone-21dfc",
  storageBucket: "primevideoclone-21dfc.appspot.com",
  messagingSenderId: "743476689151",
  appId: "1:743476689151:web:c94466af8f18a35022f4ca",
  measurementId: "G-LR8H03TQZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);