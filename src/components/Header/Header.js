import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className='bg-blue-900 text-blue-100'>
         <div className='sm:container px-1'>
            <nav className='flex justify-between items-center'>
               <div>
                  <h2 className='text-4xl font-bold'>SHOMEX</h2>
               </div>
               <div className='text-xl'>
                  <NavLink
                     className='py-6 inline-block border-b-2 border-transparent mr-10'
                     activeClassName='border-blue-50 border-b-2'
                     to='/myService'
                  >
                     My Service
                  </NavLink>
                  <NavLink
                     className='py-6 inline-block border-b-2 border-transparent mr-10'
                     activeClassName='border-blue-50 border-b-2 '
                     to='/addService'
                  >
                     Add Service
                  </NavLink>
                  <NavLink
                     className='border px-5 py-2 rounded hover:bg-white hover:text-blue-900'
                     activeClassName=''
                     to='/login'
                  >
                     Login
                  </NavLink>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
