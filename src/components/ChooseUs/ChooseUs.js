import React from 'react';
import SectionsHeading from '../SectionsHeading/SectionsHeading';

const ChooseUs = () => {
   return (
      <section className='my-16'>
         <div className='sm:container px-1'>
            <SectionsHeading
               heading='Here is the reasons why'
               mainHeading='Choose us as your logistic partner'
               mb='mb-16'
            />
            {/* feature container start */}
            <div className='flex justify-center items-center gap-10 text-center flex-wrap'>
               {/* single feature container */}
               <div className='flex flex-col items-center max-w-sm'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-24 w-24'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='#1e3a8a'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                     />
                  </svg>
                  <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                     Doorstep pickup and delivery
                  </h2>
                  <p className='text-gray-500 text-xl'>
                     Your parcel will reach the destination from your door
                  </p>
               </div>

               <div>
                  <div className='flex flex-col items-center max-w-sm'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-24 w-24'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#1e3a8a'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20'
                        />
                     </svg>
                     <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                        SMS Update
                     </h2>
                     <p className='text-gray-500 text-xl'>
                        You will get real time update of your product via sms
                     </p>
                  </div>
               </div>
               <div>
                  <div className='flex flex-col items-center max-w-sm'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-24 w-24'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#1e3a8a'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                     </svg>
                     <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                        3 Days guaranteed delivery
                     </h2>
                     <p className='text-gray-500 text-xl'>
                        We will deliver your product within 3 working days
                     </p>
                  </div>
               </div>
               <div>
                  <div className='flex flex-col items-center max-w-sm'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-24 w-24'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#1e3a8a'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                     </svg>
                     <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                        Next Day Payment
                     </h2>
                     <p className='text-gray-500 text-xl'>
                        We pay your payment day After successful delivery
                     </p>
                  </div>
               </div>
               <div>
                  <div className='flex flex-col items-center max-w-sm'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-24 w-24'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#1e3a8a'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                     </svg>
                     <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                        Secure handling
                     </h2>
                     <p className='text-gray-500 text-xl'>
                        We handle your product with a great care as it is our
                        sole purpose
                     </p>
                  </div>
               </div>
               <div>
                  <div className='flex flex-col items-center max-w-sm'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-24 w-24'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='#1e3a8a'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                     </svg>
                     <h2 className='text-blue-900 text-2xl font-bold mt-5 mb-1'>
                        Best COD rate
                     </h2>
                     <p className='text-gray-500 text-xl'>
                        Within Dhaka COD charge 0%, outside 2%
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ChooseUs;
