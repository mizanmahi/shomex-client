import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import SectionsHeading from '../SectionsHeading/SectionsHeading';
import Spinner from '../Spinner/Spinner';
import Swal from 'sweetalert2';

const MyService = () => {
   const { user } = useAuth();
   const [myServices, setMyServices] = useState([]);
   const [loading, setLoading] = useState(false);
   console.log(user.email);
   useEffect(() => {
      setLoading(true);
      axios
         .get(`http://localhost:5000/myOrders/${user.email}`)
         .then(({ data }) => {
            setLoading(false);
            setMyServices(data);
            console.log(data);
         });
   }, [user.email]);

   const cancelOrderHandler = async (id) => {
      const response = await Swal.fire({
         title: 'Deleting Order!',
         text: 'Do you want to Cancel this order?',
         icon: 'warning',
         confirmButtonText: 'Confirm',
         confirmButtonColor: '#EE4B2B',
         showCancelButton: true,
         cancelButtonText: 'No Keep My Order',
         cancelButtonColor: '#1e3a8a',
         background: '#dbeafe',
         width: '25rem',
      });

      if (response.isConfirmed) {
         const { data } = await axios.delete(
            `http://localhost:5000/deleteOrder/${id}`
         );
         if (data.deletedCount) {
            setMyServices((prevServices) =>
               prevServices.filter((service) => service._id !== id)
            );
            toast.warn('Order Cancelled Successfully');
         }
      }
   };

   return (
      <section className='my-10'>
         <div className='sm:container px-1'>
            <SectionsHeading
               mainHeading='Your Services'
               heading='All the services you choose from SHOMEX'
            />
            {loading ? (
               <Spinner />
            ) : (
               <div className='bg-blue-100 w-full px-5 py-3'>
                  <h2 className='text-4xl text-blue-900 font-bold'>Orders</h2>
                  <p className='text-gray-500 font-semibold'>
                     {myServices.length}{' '}
                     {myServices.length > 1 ? 'Items' : 'Item'}
                  </p>
                  <div className='mt-5'>
                     {myServices.map(
                        ({
                           createdAt,
                           _id,
                           fullAddress,
                           orderItem,
                           orderStatus,
                           userCity,
                           userName,
                           userTel,
                        }) => (
                           <div
                              key={_id}
                              className='bg-white text-gray-800 grid md:grid-cols-4 p-2 shadow rounded mb-5'
                           >
                              <div className='self-center'>
                                 <h2 className='text-sm text-gray-500'>
                                    Recipient Info
                                 </h2>

                                 <p className='text-xl font-bold'>
                                    Recipient: {userName}
                                 </p>
                                 <p className='text-gray-600'>
                                    Contact: {userTel}
                                 </p>
                                 <p className='text-gray-600'>
                                    City: {userCity}
                                 </p>
                                 <p className='text-gray-600'>
                                    Address: {fullAddress}
                                 </p>
                              </div>
                              <div className='justify-self-center self-center flex-col flex items-center'>
                                 <p
                                    className={`${
                                       orderStatus === 'pending'
                                          ? 'bg-red-600'
                                          : 'bg-green-600 '
                                    } px-3 py-2 text-white font-bold`}
                                 >
                                    status: {orderStatus.toUpperCase()}
                                 </p>
                                 <button
                                    className='border border-gray-400 px-3 py-2 mt-2 hover:bg-gray-400'
                                    onClick={() => cancelOrderHandler(_id)}
                                 >
                                    Cancel Order
                                 </button>
                              </div>
                              <div className='self-center'>
                                 <h2 className='text-sm text-gray-500'>
                                    Order Info
                                 </h2>
                                 <h2 className='text-xl font-bold'>
                                    Order Name: {orderItem?.name}
                                 </h2>
                                 <p className='text-sm text-gray-500 mb-2'>
                                    Ordered At: {createdAt}
                                 </p>
                                 <p>Cost: {orderItem.price}</p>
                              </div>
                              <div
                                 style={{
                                    backgroundImage: `url(${orderItem.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '15rem',
                                 }}
                              >
                                 {/* <img src={orderItem.imageUrl} alt="" className='w-64' /> */}
                              </div>
                           </div>
                        )
                     )}
                  </div>
               </div>
            )}
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

export default MyService;
