import { initializeApp } from "firebase/app"

const app = initializeApp({

    apiKey: REACT_APP_FIREBASE_PROJECT_ID,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_API_KEY,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_ID

    // apiKey: "AIzaSyCip44oOHu7fQ34DGoQeanW9AC7uiuoLKs",
    // authDomain: "barber-project-e7916.firebaseapp.com",
    // projectId: "barber-project-e7916",
    // storageBucket: "barber-project-e7916.appspot.com",
    // messagingSenderId: "729338516775",
    // appId: "1:729338516775:web:9e8a52a7d282d1dd758502"
})

export {app}