import React from 'react';
import { AuthContext } from '../../context/authContext';
import useFirebase from '../../hooks/useFirebase';

const AuthContextProvider = ({ children }) => {
   const allAuthFunctionality = useFirebase();

   return (
      <AuthContext.Provider value={allAuthFunctionality}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
