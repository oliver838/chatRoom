// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCn-fZs2H9cPa4b_CXUglMnLrIfAUa4EdI",
  authDomain: "chatalma-a1d01.firebaseapp.com",
  projectId: "chatalma-a1d01",
  storageBucket: "chatalma-a1d01.firebasestorage.app",
  messagingSenderId: "581814891341",
  appId: "1:581814891341:web:343e925cdd7b01c9437d04"
};


/*export const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.VITE_AUTH_NAME,
  projectId: import.meta.VITE_PROJECT_ID,
  storageBucket: import.meta.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_APP_ID
};
*/


// Initialize Firebase
export const app = initializeApp(firebaseConfig);