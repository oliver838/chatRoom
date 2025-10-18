import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebasConfig";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)