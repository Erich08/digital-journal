import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_ID,
  authDomain: 'evernote-clone-94a89.firebaseapp.com',
  projectId: 'evernote-clone-94a89',
  storageBucket: 'evernote-clone-94a89.appspot.com',
  messagingSenderId: '294175451710',
  appId: '1:294175451710:web:0f1e9dec536c211b813f6f',
  measurementId: 'G-QL5KC5JQR6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
