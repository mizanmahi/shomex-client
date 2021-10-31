import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';
// import useFirebase from '../hooks/useFirebase';
import googleLogo from '../media/google.png';

const Login = () => {
   const { signInWithGoogle, setUserLoading, setError, error } = useAuth();
   const location = useLocation();
   const history = useHistory();


   const handleGoogleSign = () => {
      signInWithGoogle().then((result) => {
         setUserLoading(false);
         toast.success('Sign in successful!')
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
      <section className='h-96'>
         <div className='sm:container px-1 flex justify-center items-center'>
            <form
               className='bg-blue-200 px-3 sm:px-16 py-10 mt-10 rounded'
               onSubmit={handleSubmit}
            >
               <h2 className='text-blue-900 text-4xl font-bold'>Sign in</h2>
               <button
                  className='flex items-center bg-googleBlue px-1 py-1 rounded text-white text-md pr-3 mt-5'
                  onClick={handleGoogleSign}
               >
                  <div className='bg-white mr-3 p-1 rounded'>
                     <img src={googleLogo} alt='google logo' className='w-8' />
                  </div>
                  Sign in with google
               </button>
            </form>
         </div>
         <ToastContainer
            position='top-left'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </section>
   );
};

export default Login;
