import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDo-DwKfnnWwQ7FBNdCSzZQLhHb6M4FpOM",
    authDomain: "export-bd.firebaseapp.com",
    projectId: "export-bd",
    storageBucket: "export-bd.appspot.com",
    messagingSenderId: "938099373586",
    appId: "1:938099373586:web:d416a3fb12c261c6498acb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
