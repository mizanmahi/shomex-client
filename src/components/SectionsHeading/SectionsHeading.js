import React from 'react';

const SectionsHeading = ({heading, mainHeading}) => {
   return (
      <div className='sectionHeading mb-10 text-center'>
         <h2 className='text-4xl font-bold text-blue-900'>{mainHeading} </h2>
         <p className='text-gray-700 text-xl'>
            {heading}
         </p>
         <hr className='w-16 h-1 bg-blue-900 mt-2 mx-auto' />
      </div>
   );
};

export default SectionsHeading;
