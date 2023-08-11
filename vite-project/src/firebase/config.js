// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFKfuIs3PBSwfezjhT8FbOs9XAYRlIs0M",
  authDomain: "final-react-timpano.firebaseapp.com",
  projectId: "final-react-timpano",
  storageBucket: "final-react-timpano.appspot.com",
  messagingSenderId: "134115094915",
  appId: "1:134115094915:web:85c0bda501482f549846b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)