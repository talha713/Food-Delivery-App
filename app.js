import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

let getBtn = document.querySelector("#btn");

if (getBtn) {
    getBtn.addEventListener('click', () => {
        let userAuth = () => {
            let getEmail = document.querySelector("#semail").value;
            let getPass = document.querySelector("#spass").value;

            createUserWithEmailAndPassword(auth, getEmail, getPass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    location.href = "login.html";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                });
        };
        userAuth()
    });
}


let getLBtn = document.querySelector("#lbtn")
if (getLBtn) {
    getLBtn.addEventListener('click', () => {

        let email = document.querySelector("#lemail").value
        let password = document.querySelector("#lpass").value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                location.href = "dashboard.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });


    })
}
