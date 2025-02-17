import { Platform } from "react-native"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: Platform.select({
    ios: process.env.FIREBASE_API_KEY_IOS,
    android: process.env.FIREBASE_API_KEY_ANDROID,
  }),
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Platform.select({
    ios: process.env.FIREBASE_APP_ID_IOS,
    android: process.env.FIREBASE_APP_ID_ANDROID,
  }),
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

