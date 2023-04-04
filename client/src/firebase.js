import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnr3ehLM74J2lO8VGUIz3oZzLkWMIMzo0",
  authDomain: "video-fbe8e.firebaseapp.com",
  projectId: "video-fbe8e",
  storageBucket: "video-fbe8e.appspot.com",
  messagingSenderId: "908709447557",
  appId: "1:908709447557:web:7e41309debbc42adcb26ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app;