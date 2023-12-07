import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn0B-hZXdhIQQJMe7irVg8qpSyDiksQjg",
  authDomain: "react-firebase-calculato-a32f2.firebaseapp.com",
  projectId: "react-firebase-calculato-a32f2",
  storageBucket: "react-firebase-calculato-a32f2.appspot.com",
  messagingSenderId: "533721032304",
  appId: "1:533721032304:web:f8eff524e1918f3347f6b5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
