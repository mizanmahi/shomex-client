import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import newsLetterImage from '../../media/newsLetter.svg';

const NewsLetter = () => {
   const [email, setEmail] = useState('');

   const newsLetterHandler = async () => {
      const newsletterInfo = {
         email,
         createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      const { data } = await axios.post(
         'https://shomex-server.herokuapp.com/newsletter',
         newsletterInfo
      );
      if (data.insertedId) {
         setEmail('')
         await Swal.fire({
            title: 'Thanks for Subscribing SHOMEX',
            text: `${email} was added to our subscribed list`,
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#1e3a8a',
            background: '#dbeafe',
            width: '25rem',
         });
      }
   };

   return (
      <section className='my-10 bg-blue-100 py-20'>
         <div className='sm:container px-1'>
            <div className='md:grid md:grid-cols-2 items-center justify-items-center gap-10'>
               <div>
                  <h2 className='text-blue-900 font-bold text-4xl'>
                     Subscribe Shomex's Newsletter
                  </h2>
                  <p className='text-xl text-gray-500 mb-10'>
                     Get all the latest updates from shomex
                  </p>
                  {/* <input type="email" placeholder='E-mail'  /> */}
                  <div className='flex bg-white h-12 items-center text-gray-600 px-2 rounded'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                     </svg>
                     <input
                        className='focus:outline-none focus:border-transparent pl-1 w-full'
                        placeholder='Your Email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <button
                     className='bg-blue-900 px-7 py-2 rounded shadow text-xl hover:bg-blue-800 text-white mt-2 flex items-center justify-center'
                     onClick={newsLetterHandler}
                  >
                     Send
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 ml-3'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                     </svg>
                  </button>
               </div>
               <div className='mt-5'>
                  <img src={newsLetterImage} alt='newsletter' />
               </div>
            </div>
         </div>
      </section>
   );
};

export default NewsLetter;
