import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsmRAhtlN3z41A-SroT4JDI-A3NwnTAr0",
  authDomain: "intellectual-property-37fae.firebaseapp.com",
  projectId: "intellectual-property-37fae",
  storageBucket: "intellectual-property-37fae.appspot.com",
  messagingSenderId: "945895331209",
  appId: "1:945895331209:web:8647c875ffb8cecc8fbd58",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);

const docRef = (beats) => {
  return addDoc(collection(db, "beat_samples"), beats);
};

const PostRef = (post) => {
  return addDoc(collection(db, "post"), post)
}

const UserRef = (userData) => {
  return addDoc(collection(db, "users"), userData)
}

const Contact = (contact) => {
  return addDoc(collection(db, "contact"), contact)
}

const OrderRef = (order) => {
  return addDoc(collection(db, "order"), order)
}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});

const auth = getAuth();
const signInGoogle = () => {
  return signInWithPopup(auth, provider);
};

export {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  storage,
  docRef,
  getDocs,
  db,
  collection,
  signInGoogle,
  onAuthStateChanged,
  auth,
  signOut,
  UserRef,
  PostRef,
  doc,
  Contact,
  OrderRef
};
