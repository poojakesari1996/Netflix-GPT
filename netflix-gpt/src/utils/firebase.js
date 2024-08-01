// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYCkVWovETa-WuRHWhEnNBTIPuowvTSUA",
  authDomain: "netflixgpt-b64a0.firebaseapp.com",
  projectId: "netflixgpt-b64a0",
  storageBucket: "netflixgpt-b64a0.appspot.com",
  messagingSenderId: "733859336205",
  appId: "1:733859336205:web:a5e1f55999d3468881c544",
  measurementId: "G-C2CWB1J0C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
