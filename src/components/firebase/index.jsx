import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCmXgYyCq5V2ux8bSTf91QcHfduIrO_FPs",
  authDomain: "vanlife-defee.firebaseapp.com",
  projectId: "vanlife-defee",
  storageBucket: "vanlife-defee.appspot.com",
  messagingSenderId: "720664441688",
  appId: "1:720664441688:web:de8e20bcbb1d97655aab2d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const vansCollectionRef = collection(db, "vans");
