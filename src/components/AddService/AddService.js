import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAuth } from '../../hooks/useAuth';
import SectionsHeading from '../SectionsHeading/SectionsHeading';

const AddService = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const {
      user: { displayName },
   } = useAuth();

   const onSubmit = async (formData) => {
      formData.addedBy = displayName;
      const { data } = await axios.post(
         'https://shomex-server.herokuapp.com/addService',
         formData
      );
      if (data.insertedId) {
         await Swal.fire({
            title: 'New service is added',
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#1e3a8a',
            background: '#dbeafe',
            width: '25rem',
         });
         reset();
      }
   };

   return (
      <section className='my-10'>
         <div className='sm:container px-1'>
            <SectionsHeading
               heading='Add a new service you want to offer'
               mainHeading='Add a Service'
            />
            <div>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='bg-blue-200 px-10 py-8 rounded w-full md:w-1/2 mx-auto'
               >
                  <h2 className='text-3xl text-blue-900 font-bold mb-3'>
                     Add Service Details
                  </h2>

                  <div className='mb-2'>
                     <div className='flex bg-white h-12 items-center text-gray-600 px-2 rounded '>
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
                              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                           />
                        </svg>
                        <input
                           className='focus:outline-none focus:border-transparent pl-1 w-full'
                           placeholder='Service Name'
                           type='text'
                           {...register('name', { required: true })}
                        />
                     </div>

                     {errors?.name && (
                        <span className='text-red-500 inline-block text-sm'>
                           Service name is required*
                        </span>
                     )}
                  </div>
                  {/* =================================================== */}
                  <div className='mb-2'>
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
                           placeholder='Image url '
                           type='text'
                           {...register('imageUrl', {
                              required: {
                                 value: true,
                                 message: 'Image Url is required',
                              },
                           })}
                        />
                     </div>
                     {errors?.imageUrl && (
                        <span className='text-red-500 inline-block text-sm'>
                           {errors.imageUrl?.message}
                        </span>
                     )}
                  </div>

                  {/* ====================================================== */}

                  {/* ====================================================== */}
                  <div className='mb-2'>
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
                              d='M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z'
                           />
                        </svg>
                        <input
                           className='focus:outline-none focus:border-transparent pl-1 w-full'
                           placeholder='Cost'
                           type='number'
                           {...register('price', {
                              required: {
                                 value: true,
                                 message: 'Service must need to have a cost',
                              },
                           })}
                        />
                     </div>
                     {errors?.price && (
                        <span className='text-red-500 inline-block text-sm'>
                           {errors.price?.message}
                        </span>
                     )}
                  </div>
                  {/* ========================Description=========================== */}
                  <div className='mb-2'>
                     <div className='flex bg-white h-28 items-center text-gray-600 px-2 rounded'>
                        <textarea
                           className='focus:outline-none focus:border-transparent pl-1 w-full h-full'
                           placeholder='Write service description'
                           type='number'
                           {...register('description', {
                              required: {
                                 value: true,
                                 message:
                                    'Service must need to have a description',
                              },
                           })}
                        />
                     </div>
                     {errors?.description && (
                        <span className='text-red-500 inline-block text-sm'>
                           {errors.description?.message}
                        </span>
                     )}
                  </div>
                  <button className='bg-blue-900 text-blue-100 w-full px-5 py-3 rounded'>
                     Add Service
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddService;
