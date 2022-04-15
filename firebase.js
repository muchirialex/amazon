import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCgwY_8x3Ox5kZh3NfPJXQ5AHUCxRR97Y",
  authDomain: "app-becb4.firebaseapp.com",
  projectId: "app-becb4",
  storageBucket: "app-becb4.appspot.com",
  messagingSenderId: "539100997199",
  appId: "1:539100997199:web:b73d70e2be1fa6df33ac3a"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();