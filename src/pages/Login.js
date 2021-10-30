import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../hooks/useAuth';
// import useFirebase from '../hooks/useFirebase';
import googleLogo from '../media/google.png';

const Login = () => {
   const { signInWithGoogle, setUserLoading, setError, error } = useAuth();
   const location = useLocation();
   const history = useHistory();

   console.log(location.state);

   const handleGoogleSign = () => {
      signInWithGoogle().then((result) => {
         setUserLoading(false);
         location.state
            ? history.push(location.state?.from)
            : history.push('/');
      }).catch(err => {
         setError(err.message);
         console.log(error);
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <section className='min-h-screen'>
         <div className='sm:container px-1 flex justify-center items-center'>
            <form
               className='bg-blue-200 px-16 py-5 mt-10 rounded'
               onSubmit={handleSubmit}
            >
               <h2 className='text-blue-900 text-4xl font-bold'>Sign in</h2>
               <button
                  className='flex items-center bg-googleBlue px-1 py-1 rounded text-white text-xl pr-3 mt-5'
                  onClick={handleGoogleSign}
               >
                  <div className='bg-white mr-3 p-1 rounded'>
                     <img src={googleLogo} alt='google logo' className='w-8' />
                  </div>
                  Sign in with google
               </button>
            </form>
         </div>
      </section>
   );
};

export default Login;
