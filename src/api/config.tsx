import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVSXYw4kLtXr40UWUp0xyoTXNeq-CaHuQ",
  authDomain: "lefworks-33dfc.firebaseapp.com",
  projectId: "lefworks-33dfc",
  storageBucket: "lefworks-33dfc.appspot.com",
  messagingSenderId: "518533763822",
  appId: "1:518533763822:web:b7a392816131cde2d459ff",
  measurementId: "G-3YNL979602",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
