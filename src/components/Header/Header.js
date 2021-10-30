import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
   const { logOutUser, user } = useAuth();
   return (
      <header className='bg-blue-900 text-blue-100'>
         <div className='sm:container px-1'>
            <nav className='flex justify-between items-center'>
               <div>
                  <Link to='/'><h2 className='text-4xl font-bold'>SHOMEX</h2></Link>
               </div>
               <div className='text-xl flex items-center'>
                  <NavLink
                     className='py-6 inline-block border-b-2 border-transparent mr-10'
                     activeClassName='border-blue-50 border-b-2'
                     to='/myOrders'
                  >
                     My Orders
                  </NavLink>
                  <NavLink
                     className='py-6 inline-block border-b-2 border-transparent mr-10'
                     activeClassName='border-blue-50 border-b-2'
                     to='/manageOrders'
                  >
                     Manage All Orders
                  </NavLink>
                  <NavLink
                     className='py-6 inline-block border-b-2 border-transparent mr-10'
                     activeClassName='border-blue-50 border-b-2 '
                     to='/addService'
                  >
                     Add Service
                  </NavLink>
                  {!user ? (
                     <NavLink
                        className='border px-5 py-2 rounded hover:bg-white hover:text-blue-900'
                        activeClassName=''
                        to='/login'
                     >
                        Login
                     </NavLink>
                  ) : (
                     <div className='flex items-center'>
                        <div className='flex items-center mr-2'>
                           <img
                              src={user.photoURL}
                              alt='user'
                              className='w-12 h-12 rounded-full mr-2'
                           />
                           {user.displayName}
                        </div>
                        <button onClick={logOutUser}>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-8 w-8'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                              />
                           </svg>
                        </button>
                     </div>
                  )}
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
