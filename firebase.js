import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    serverTimestamp,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBeNYf2Ngxc5bCZkLAJJcJCFLnqRf-nDF8",
    authDomain: "food-delivery-app-9a187.firebaseapp.com",
    projectId: "food-delivery-app-9a187",
    storageBucket: "food-delivery-app-9a187.appspot.com",
    messagingSenderId: "183986037964",
    appId: "1:183986037964:web:35cb8f3edb1da7745c4e69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    db,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    doc,
    getDoc,
    serverTimestamp,
    updateDoc,
};
