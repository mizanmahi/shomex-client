import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import Spinner from '../Spinner/Spinner';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import './toast.css'

const ServiceDetails = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const {
      data: service,
      loading,
      error,
   } = useFetch(`http://localhost:5000/service/${id}`);

   const onSubmit = async (formData) => {
      formData.orderStatus = 'pending';
      formData.orderItem = service;
      formData.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(formData);

      const { data } = await axios.post(
         'http://localhost:5000/order',
         formData
      );
      if (data.insertedId) {
         toast.success('Order Placed Successfully!');
         reset();
      }
   };

   console.log(errors);

   return (
      <section className='bg-blue-100'>
         <div className='sm:container px-1'>
            <div className='md:grid grid-cols-2 items-center gap-4 py-16'>
               <div>
                  {loading ? (
                     <Spinner />
                  ) : (
                     <div className='flex items-center'>
                        <img
                           src={service?.imageUrl}
                           alt='service'
                           className='w-1/2 mr-5'
                        />
                        <div>
                           <h2 className='text-4xl text-blue-900 font-bold'>
                              {service?.name}
                           </h2>
                           <p className='text-md text-gray-700 my-5'>
                              {service?.description}.
                           </p>
                           <span className='border border-blue-900 px-10 py-2 text-xl text-blue-800 inline-block rounded hover:text-blue-100 hover:bg-blue-900 cursor-pointer'>
                              Tk {service?.price}
                           </span>
                        </div>
                     </div>
                  )}
               </div>
               <div className='w-2/3 justify-self-center'>
                  {/*============================ shipping form======================== */}
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className='bg-blue-200 px-10 py-8 rounded'
                  >
                     <h2 className='text-3xl text-blue-900 font-bold mb-3'>
                        Fill the shipping information to continue
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
                              placeholder='Your Name'
                              type='text'
                              {...register('userName', { required: true })}
                              defaultValue={user?.displayName}
                           />
                        </div>

                        {errors?.userName && (
                           <span className='text-red-500 inline-block'>
                              User name is required*
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
                              placeholder='Your Email'
                              type='email'
                              {...register('userEmail', {
                                 required: {
                                    value: true,
                                    message: 'Email is required',
                                 },
                                 pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Please insert a valid email',
                                 },
                              })}
                              defaultValue={user?.email}
                           />
                        </div>
                        {errors?.userEmail && (
                           <span className='text-red-500 inline-block'>
                              {errors.userEmail?.message}
                           </span>
                        )}
                     </div>

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
                                 d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                              />
                           </svg>
                           <input
                              className='focus:outline-none focus:border-transparent pl-1 w-full'
                              placeholder='Enter full address'
                              type='text'
                              {...register('fullAddress', {
                                 required: {
                                    value: true,
                                    message: 'Full Address is required',
                                 },
                              })}
                           />
                        </div>
                        {errors?.fullAddress && (
                           <span className='text-red-500 inline-block text-xs'>
                              {errors.fullAddress?.message}
                           </span>
                        )}
                     </div>
                     {/* ====================================================== */}
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
                                 d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                              />
                           </svg>
                           <input
                              className='focus:outline-none focus:border-transparent pl-1 w-full'
                              placeholder='Your City'
                              type='text'
                              {...register('userCity', {
                                 required: {
                                    value: true,
                                    message: 'City name is required',
                                 },
                              })}
                           />
                        </div>
                        {errors?.userCity && (
                           <span className='text-red-500 inline-block text-sm'>
                              {errors.userCity?.message}
                           </span>
                        )}
                     </div>
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
                                 d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                           </svg>
                           <input
                              className='focus:outline-none focus:border-transparent pl-1 w-full'
                              placeholder='Country'
                              type='text'
                              {...register('userCountry')}
                           />
                        </div>
                     </div>
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
                              placeholder='Contact Number'
                              type='number'
                              {...register('userTel', {
                                 minLength: {
                                    value: 11,
                                    message:
                                       'Must be minimum 11 characters long ',
                                 },
                                 required: {
                                    value: true,
                                    message: 'Contact number must need to provide'
                                 }
                              })}
                           />
                        </div>
                        {errors?.userTel && (
                           <span className='text-red-500 inline-block text-sm'>
                              {errors.userTel?.message}
                           </span>
                        )}
                     </div>
                     <button className='bg-blue-900 text-blue-100 w-full px-5 py-3 rounded'>
                        Proceed Order
                     </button>
                  </form>
               </div>
            </div>
         </div>
         <ToastContainer
            position='top-center'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className='toast-success-container-after toast-success-container'
         />
      </section>
   );
};

export default ServiceDetails;
