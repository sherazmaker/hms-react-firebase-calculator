import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2CCliPp7yXmuoe8ivQraWgF3MIqUskhw",
  authDomain: "calculator-app-53f81.firebaseapp.com",
  projectId: "calculator-app-53f81",
  storageBucket: "calculator-app-53f81.appspot.com",
  messagingSenderId: "98836913818",
  appId: "1:98836913818:web:bb1d8a2dbaa9f181338923"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
