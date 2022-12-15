import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPixtgiSyBZ-dxadGEWlPAfQBlc_U5aJ4",
  authDomain: "erasmus-net-e2c1c.firebaseapp.com",
  projectId: "erasmus-net-e2c1c",
  storageBucket: "erasmus-net-e2c1c.appspot.com",
  messagingSenderId: "557638025392",
  appId: "1:557638025392:web:fdf6d737eb73ee29e13b75",
  measurementId: "G-QFBW6QC4BW",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
