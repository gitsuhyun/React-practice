import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy40Hg3wAeWLUsm77Qa-oUWI2pYSNN1SU",
  authDomain: "nwitter-reloaded-519bb.firebaseapp.com",
  projectId: "nwitter-reloaded-519bb",
  storageBucket: "nwitter-reloaded-519bb.appspot.com",
  messagingSenderId: "170037667843",
  appId: "1:170037667843:web:01e58ce701d3a7bf01c636"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);