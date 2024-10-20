// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLQDOuYOKvhouvrxtQoJ8-B4fSipBTxrM",
    authDomain: "my-lab5-6d28c.firebaseapp.com",
    projectId: "my-lab5-6d28c",
    storageBucket: "my-lab5-6d28c.appspot.com",
    messagingSenderId: "545081026669",
    appId: "1:545081026669:web:d0d9fb1b753d816dad7764",
    measurementId: "G-BYNNCD72ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
