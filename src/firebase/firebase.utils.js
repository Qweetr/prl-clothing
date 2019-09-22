import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyClFQBTEYDYntbBn4JxF5JmeXZYFv2Yle8",
  authDomain: "prl-clothing.firebaseapp.com",
  databaseURL: "https://prl-clothing.firebaseio.com",
  projectId: "prl-clothing",
  storageBucket: "",
  messagingSenderId: "909485946799",
  appId: "1:909485946799:web:84871d1eb87add4632615a"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;