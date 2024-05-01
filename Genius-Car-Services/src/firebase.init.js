// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    /* apiKey: String(process.env.REACT_APP_apiKey),
    authDomain: process.env.REACT_APP_authDomain,
    projectId: String(process.env.REACT_APP_projectId),
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: String(process.env.REACT_APP_appId),
    measurementId: process.env.REACT_APP_measurementId, */

    apiKey: "AIzaSyAwoL3AuT3CSrQDRxjnHj-EURa34bgwQB4",
    authDomain: "genius-car-services-react-app.firebaseapp.com",
    projectId: "genius-car-services-react-app",
    storageBucket: "genius-car-services-react-app.appspot.com",
    messagingSenderId: "1046637203477",
    appId: "1:1046637203477:web:8f8dbbcb40d3407a457e1c",
    measurementId: "G-S8CV5LHHHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;