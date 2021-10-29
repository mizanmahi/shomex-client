import React from 'react';
import logisticSvg from '../../media/logistic_svg.svg';

const Intro = () => {
   return (
      <section className='bg-blue-100'>
         <div className='sm:container px-1'>
            <div className='md:grid grid-cols-2 items-center gap-4 py-16'>
               <div>
                  <h2 className='text-4xl font-bold'>Your Product,</h2>
                  <h2 className='text-4xl font-bold my-1'>
                     Our Logistics
                  </h2>
                  <p className='text-gray-700 text-xl my-5'>The most trusted logistic service in Bangladesh. Ship, manage, track and deliver within single platform.</p>
                  <button className='px-5 py-3 bg-blue-900 text-blue-100 rounded text-xl'>
                     See Our Services
                  </button>
               </div>
               <div>
                  <img src={logisticSvg} alt='logistic' />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Intro;
