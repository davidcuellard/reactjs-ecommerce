// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyS5DomjA2sdExj0N2CvEOjgBagLHFQRA",
  authDomain: "reactjs-ecommerce-dc.firebaseapp.com",
  projectId: "reactjs-ecommerce-dc",
  storageBucket: "reactjs-ecommerce-dc.appspot.com",
  messagingSenderId: "805232600576",
  appId: "1:805232600576:web:a4ed187b0e17ea81f61ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}