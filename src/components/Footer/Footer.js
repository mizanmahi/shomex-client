import React from 'react';
import { Link } from 'react-router-dom';
import googlePlayBadge from '../../media/google-play-badge.svg';
import {
   AiFillFacebook,
   AiFillLinkedin,
   AiOutlineGithub,
} from 'react-icons/ai';

const Footer = () => {
   return (
      <section className='mt-20 bg-blue-100 py-16'>
         <div className='sm:container px-1 text-center md:text-justify'>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center'>
               <div className='mb-8 md:mb-5 xl:mb-0'>
                  <Link to='/'>
                     <h2 className='text-4xl font-bold mb-2'>SHOMEX</h2>
                  </Link>
                  <p className='text-md text-gray-500'>
                     Download our app for faster solution
                  </p>
                  <img
                     src={googlePlayBadge}
                     alt='google play badge'
                     className='mt-8 mx-auto md:mx-0'

                  />
               </div>
               <div className='mb-8 md:mb-5 xl:mb-0'>
                  <h2 className='text-2xl text-gray-800 font-bold mb-3'>
                     About us
                  </h2>
                  <p className='text-xl text-gray-500 mb-3'>
                     Shomex Limited, an initiative of Concorde e-commerce Group,
                     is an innovative logistics and delivery service provider.
                  </p>
                  <p className='text-xl text-gray-500'>
                     {' '}
                     Shomex aims to build a better eco system by transforming
                     from the traditional to technology driven delivery services
                     for the first time in Bangladesh.
                  </p>
               </div>
               <div className='mb-8 md:mb-5 xl:mb-0'>
                  <h2 className='text-2xl text-gray-800 font-bold mb-3'>
                     Contact us
                  </h2>
                  <p className='text-xl text-gray-500 mb-2'>
                     192, Rampura, Bansree residential are, Dhaka 1219
                  </p>
                  <p className='text-xl text-gray-500 mb-2'>0155231111</p>
                  <p className='text-xl text-gray-500 mb-2 hover:text-blue-600 hover:underline cursor-pointer'>
                     contact@shomex.com.bd
                  </p>
               </div>

               <div className='mb-8 md:mb-5 xl:mb-0'>
                  <div>
                     <h2 className='text-2xl text-gray-800 font-bold mb-5'>
                        Connect with us
                     </h2>

                     <div className='flex items-center justify-center md:justify-start'>
                        <div className='h-16 w-16 bg-white mr-2 flex items-center justify-center rounded-full shadow'>
                           <AiFillFacebook className='text-3xl text-blue-600' />
                        </div>
                        <div className='h-16 w-16 bg-white mr-2 flex items-center justify-center rounded-full shadow'>
                           <AiFillLinkedin className='text-3xl text-blue-800' />
                        </div>
                        <div className='h-16 w-16 bg-white flex items-center justify-center rounded-full shadow'>
                           <AiOutlineGithub className='text-3xl' />
                        </div>
                     </div>
                     <p className='text-gray-500 text-xl mt-3'>
                        All right reserved by shomex, &copy; 2021
                     </p>
                     <p className='text-gray-500 text-xl mt-3'>
                        Design and developed by{' '}
                        <a
                           href='https://github.com/mizanmahi'
                           className='font-bold hover:text-blue-500 hover:underline'
                           target='_blank'
                           rel='noreferrer'
                        >
                           Mizan Mahi
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
