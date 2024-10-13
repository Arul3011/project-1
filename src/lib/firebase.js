import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBw2I4kLxMbgmY1hbYhR5nUxywLM-R-Hw4",
  authDomain: "imgspace-eb23c.firebaseapp.com",
  projectId: "imgspace-eb23c",
  storageBucket: "imgspace-eb23c.appspot.com",
  messagingSenderId: "1073375809778",
  appId: "1:1073375809778:web:72a6ba4651841ca5a0006b",
  measurementId: "G-1G7037GQFP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
