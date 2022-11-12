import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
    collection, 
    addDoc,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWXNSHYcg-8tB1Gojp0wp-6Uj-MsOGoxw",
    authDomain: "chate-app-5e123.firebaseapp.com",
    projectId: "chate-app-5e123",
    storageBucket: "chate-app-5e123.appspot.com",
    messagingSenderId: "772160352666",
    appId: "1:772160352666:web:e394a78b8e7e284cdd4a23"
  };


let studentSubmit = document.getElementById("studentSubmit");
let calssTiming = document.getElementById("calssTiming");
let teacherName = document.getElementById("teacherName");
let sectionName = document.getElementById("sectionName");
let courseName = document.getElementById("courseName");
let batchNumber = document.getElementById("batchNumber");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let saturday = document.getElementById("saturday");
let sunday = document.getElementById("sunday");

studentSubmit.addEventListener("click", async() => {
    try{
    const docRef = await addDoc(collection(db, "craeteClass"), {
        classtiming: calssTiming.value,
        teachername: teacherName.value,
        sectionname: sectionName.value,
        coursename: courseName.value,
        batchnumber: batchNumber.value,
        mon: monday.checked,
        tue: tuesday.checked,
        wed: wednesday.checked,
        thur: thursday.checked,
        fri: friday.checked,
        sat: saturday.checked,
        sun: sunday.checked, 
      });
    }
    catch(error){
        console.log(error)
    }
    finally{
        calssTiming.value = "";
        teacherName.value = "";
        sectionName.value = "";
        courseName.value = "";
        batchNumber.value = "";
        // monday.value="";
    }
})