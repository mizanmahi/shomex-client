import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SectionsHeading from '../SectionsHeading/SectionsHeading';
import Service from '../Service/Service';
import Spinner from '../Spinner/Spinner';

const Services = () => {
   const { data, loading } = useFetch('http://localhost:5000/services');

   console.log(data);

   return (
      <section className='my-10'>
         <div className='sm:container px-1'>
            <SectionsHeading
               heading='Choose the one according to your needs'
               mainHeading='Our Services'
            />

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
