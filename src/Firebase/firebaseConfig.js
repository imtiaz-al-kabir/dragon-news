import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCpmThkBaONAnNuq6Ygc5UrU84v_1auS2E",
  authDomain: "dragon-news-for-breaking.firebaseapp.com",
  projectId: "dragon-news-for-breaking",
  storageBucket: "dragon-news-for-breaking.firebasestorage.app",
  messagingSenderId: "310653968361",
  appId: "1:310653968361:web:a98a0f70fe6969f2437578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);