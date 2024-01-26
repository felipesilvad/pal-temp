import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdz8lBvbjsQQITCmQCDAoeudvstCXO02g",
  authDomain: "nether-3311f.firebaseapp.com",
  projectId: "nether-3311f",
  storageBucket: "nether-3311f.appspot.com",
  messagingSenderId: "916466454501",
  appId: "1:916466454501:web:241e788d6d65b4c44e290c",
  measurementId: "G-8SVYXHQ9JD"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app)

export {storage, auth};
export default getFirestore();
