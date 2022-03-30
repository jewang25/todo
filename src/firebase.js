// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB525Z0gwmDDoCVd90cmnCVo0YlIqea_Uc",
  authDomain: "todo-5392c.firebaseapp.com",
  projectId: "todo-5392c",
  storageBucket: "todo-5392c.appspot.com",
  messagingSenderId: "932182733440",
  appId: "1:932182733440:web:4099da12223147cd70ac65",
  measurementId: "G-7WK4VMD6PK"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);