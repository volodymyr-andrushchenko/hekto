// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHZNsF5gD9UJTUFl_cbughceHN2P9yHRI',
  authDomain: 'hekto-e8a41.firebaseapp.com',
  projectId: 'hekto-e8a41',
  storageBucket: 'hekto-e8a41.appspot.com',
  messagingSenderId: '1028027055888',
  appId: '1:1028027055888:web:1c109155b3cc46d2d6af95',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
