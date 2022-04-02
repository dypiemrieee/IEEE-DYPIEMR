import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCbtqcfORSYztqRmF-L0OOLJE4yKGBtS_s",
    authDomain: "ieeedypiemr.firebaseapp.com",
    projectId: "ieeedypiemr",
    storageBucket: "ieeedypiemr.appspot.com",
    messagingSenderId: "191421518569",
    appId: "1:191421518569:web:a82af64df3ec3c1538d678",
    measurementId: "G-C0LRT438H7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
var storage = getStorage();
// const auth = firebaseApp.auth();
const analytics = getAnalytics(firebaseApp);

export { analytics ,storage};

export const db = getFirestore(firebaseApp);