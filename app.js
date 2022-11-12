import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWXNSHYcg-8tB1Gojp0wp-6Uj-MsOGoxw",
  authDomain: "chate-app-5e123.firebaseapp.com",
  projectId: "chate-app-5e123",
  storageBucket: "chate-app-5e123.appspot.com",
  messagingSenderId: "772160352666",
  appId: "1:772160352666:web:e394a78b8e7e284cdd4a23"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


let email = document.getElementById("email");
let pasworrd = document.getElementById("pasworrd");
let loginSubmit = document.getElementById("log_btn");



loginSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegix =
    /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);
  const passwordRegix = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(
    pasworrd.value
  );
  if (!emailRegix) {
    swal("Warning", "Please Valid Email Address", "error");
  } else if (!passwordRegix) {
    swal("Warning", "Please Valid Password", "error");
  } else if (emailRegix && passwordRegix) {

    signInWithEmailAndPassword(auth, email.value, pasworrd.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.pathname = "/dashboard.html";
      })
      .finally(() => {
        email.value = "";
        pasworrd.value = "";
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal(
          "Warning",
          "Admin is Not Found Please Correct Email and Password",
          "error"
        );
      });
  }
});

window.onload = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (window.location.pathname === "/index.html") {
        window.location.href = "dashboard.html";
      }
    } else {
      if (window.location.pathname === "/dashboard.html") {
        window.location.href = "index.html";
      }
    }
  });
};
