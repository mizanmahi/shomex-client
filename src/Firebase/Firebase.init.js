import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';

export const initFirebaseAuth = () => {
   initializeApp(firebaseConfig);
};
