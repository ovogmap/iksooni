import * as firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArdyH4OjupmNOOv4RNeAyfQRfa-pOcces",
  authDomain: "iksooni.firebaseapp.com",
  databaseURL: "https://iksooni.firebaseio.com",
  projectId: "iksooni",
  storageBucket: "iksooni.appspot.com",
  messagingSenderId: "599576780913",
  appId: "1:599576780913:web:7d04e80b3325fa3b8efbd0"
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbStore = firebase.firestore();
export const authServise = firebase.auth();