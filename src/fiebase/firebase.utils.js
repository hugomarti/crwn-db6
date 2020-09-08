import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATplchj8ZBGxO7-r-AnvZncW9NyiSyVz4",
  authDomain: "crwn-db6-7f8f4.firebaseapp.com",
  databaseURL: "https://crwn-db6-7f8f4.firebaseio.com",
  projectId: "crwn-db6-7f8f4",
  storageBucket: "crwn-db6-7f8f4.appspot.com",
  messagingSenderId: "344234843003",
  appId: "1:344234843003:web:dace8189444e676765bbde",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
