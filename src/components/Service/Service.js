import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
   const { name, imageUrl, description, price, _id } = service;
   return (
      <div className='max-w-xs'>
         <img src={imageUrl} alt='service' className='max-w-xs' />
         <div>
            <div>
               <h2 className='text-2xl text-blue-900 font-bold'>{name}</h2>
               <div className='flex flex-col items-start mt-3'>
                  <span className='bg-blue-900 text-white px-2 py-1 rounded'>
                     Tk {price}
                  </span>
                  <Link
                     className='mt-3 px-5 py-1 rounded border border-blue-900'
                     to={`serviceDetails/${_id}`}
                  >
                     Get this Service
                  </Link>
               </div>
               <p className='text-md text-gray-700'>{description}</p>
            </div>
         </div>
      </div>
   );
};

export default Service;
