import { useEffect, useState } from 'react';
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   onAuthStateChanged,
   signOut,
} from 'firebase/auth';
import { initFirebaseAuth } from '../Firebase/Firebase.init';

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [userLoading, setUserLoading] = useState(true);

   //@ initializing firebase auth
   initFirebaseAuth();
   const auth = getAuth();

   const googleProvider = new GoogleAuthProvider();

   const signInWithGoogle = () => {
      setUserLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const logOutUser = () => signOut(auth);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
         setUserLoading(false);
      });
      return unsubscribe;
   }, []);

   return {
      user,
      error,
      setError,
      signInWithGoogle,
      logOutUser,
      userLoading,
      setUserLoading,
   };
};

export default useFirebase;
