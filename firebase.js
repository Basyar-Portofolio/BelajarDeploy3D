// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD_DzBeIXlE_AT-338mzClgJGhZfRBIFI",
  authDomain: "kapak-deploy.firebaseapp.com",
  projectId: "kapak-deploy",
  storageBucket: "kapak-deploy.appspot.com",
  messagingSenderId: "879660615195",
  appId: "1:879660615195:web:c81b1423feb00a0c40dabe",
  measurementId: "G-8JBNTTMVTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);