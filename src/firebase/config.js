import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChGZkosEEy3pSkp-qX5-fdLtXbaE-TS-c",
  authDomain: "vue-first-firebase-site.firebaseapp.com",
  projectId: "vue-first-firebase-site",
  storageBucket: "vue-first-firebase-site.appspot.com",
  messagingSenderId: "1017575532847",
  appId: "1:1017575532847:web:981d01bb59caad424e19da",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
