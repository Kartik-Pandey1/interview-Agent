
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-b2055.firebaseapp.com",
  projectId: "interviewagent-b2055",
  storageBucket: "interviewagent-b2055.firebasestorage.app",
  messagingSenderId: "484831965282",
  appId: "1:484831965282:web:98d830493d3dbf6651e13b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}