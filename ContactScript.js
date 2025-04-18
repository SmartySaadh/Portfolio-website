
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAee81_y88v3Aqvf6_8WHW3cHsB4iOvyE4",
    authDomain: "portfolio-contacts-3c261.firebaseapp.com",
    databaseURL: "https://portfolio-contacts-3c261-default-rtdb.firebaseio.com",
    projectId: "portfolio-contacts-3c261",
    storageBucket: "portfolio-contacts-3c261.firebasestorage.app",
    messagingSenderId: "22587869100",
    appId: "1:22587869100:web:ec9f78f9d0c488cf2fdc09",
    measurementId: "G-VBSC46CNKT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import {getdatabase,ref,set,child,update,remove} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

  const db=getdatabase();

  var namebox
