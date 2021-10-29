import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Service from '../Service/Service';
import Spinner from '../Spinner/Spinner';

const Services = () => {
   const { data, loading } = useFetch('http://localhost:5000/services');

   console.log(data);

   return (
      <section className='my-10'>
         <div className='sm:container px-1'>
            <div className='sectionHeading mb-10 text-center'>
               <h2 className='text-4xl font-bold text-blue-900'>
                  Our Services
               </h2>
               <p className='text-gray-700 text-xl'>
                  Choose the one according to your needs
               </p>
               <hr className='w-16 h-1 bg-blue-900 mt-2 mx-auto' />
            </div>

            <>
               {loading ? (
                  <Spinner />
               ) : (
                  <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-12 place-items-center'>
                     {data?.map((service) => (
                        <Service key={service._id} service={service} />
                     ))}
                  </div>
               )}
            </>
         </div>
      </section>
   );
};

export default Services;
