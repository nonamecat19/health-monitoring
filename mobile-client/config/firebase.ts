import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyC42CCL4g-xwCBXQ7tQbCfSJHRnSMaTRVM",
  authDomain: "health-monitoring-5dc66.firebaseapp.com",
  projectId: "health-monitoring-5dc66",
  storageBucket: "health-monitoring-5dc66.appspot.com",
  messagingSenderId: "1066252695771",
  appId: "1:1066252695771:web:ebf4a7696f2d52f1bc74fe"
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)