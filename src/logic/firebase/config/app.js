import { initializeApp } from "firebase/app"

const apiKey = import.meta.env.VITE_APP_FIREBASE_API_KEY
const authDomain = import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_APP_FIREBASE_PROJECT_ID
const storageBucket = import.meta.env.VITE_APP_STORAGE_BUCKET
const messagingSenderId = import.meta.env.VITE_APP_MESSAGING_SENDER_ID
const appId = import.meta.env.VITE_APP_ID

const app = initializeApp({

    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
})

export {app}