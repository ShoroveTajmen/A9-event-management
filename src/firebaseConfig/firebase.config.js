// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWT1r1JG19qzGVlGe5NvnSv72ACPAJM0",
  authDomain: "event-management-df653.firebaseapp.com",
  projectId: "event-management-df653",
  storageBucket: "event-management-df653.appspot.com",
  messagingSenderId: "223619959833",
  appId: "1:223619959833:web:2c2444e4e68f5fd88c2e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);