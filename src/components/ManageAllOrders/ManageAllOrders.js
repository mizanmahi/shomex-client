import React, { useRef } from 'react';
import SectionsHeading from '../SectionsHeading/SectionsHeading';
import useFetch from '../../hooks/useFetch';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
   const {
      data: orders,
      setData,
      loading,
   } = useFetch('https://shomex-server.herokuapp.com/allOrders');

   const cancelOrderHandler = async (id) => {
      const response = await Swal.fire({
         title: 'Deleting Order!',
         text: 'Do you want to Cancel this order?',
         icon: 'warning',
         confirmButtonText: 'Confirm',
         confirmButtonColor: '#EE4B2B',
         showCancelButton: true,
         cancelButtonText: 'No Keep This Order',
         cancelButtonColor: '#1e3a8a',
         background: '#dbeafe',
         width: '25rem',
      });

      if (response.isConfirmed) {
         const { data } = await axios.delete(
            `https://shomex-server.herokuapp.com/deleteOrder/${id}`
         );
         if (data.deletedCount) {
            setData((prevOrders) =>
               prevOrders.filter((order) => order._id !== id)
            );
            toast.warn('Order Cancelled Successfully');
         }
      }
   };


   const handleApproveOrder = async (id) => {
      const { data } = await axios.put(`https://shomex-server.herokuapp.com/approve/${id}`);
      if (data.modifiedCount) {
         setData((prevOrders) =>
            prevOrders.map((order) => {
               if (order._id === id) {
                  order.orderStatus = 'approved';
                  return order;
               }
               return order;
            })
         );

         toast.success('Order Approved!');
      }
   };


   return (
      <section className='my-10'>
         <div className='sm:container px-1'>
            <SectionsHeading
               heading='Manage all orders, change status or delete'
               mainHeading='Manage All Orders'
            />
            {loading ? (
               <Spinner />
            ) : (
               <div className='bg-blue-100 w-full px-5 py-3'>
                  <h2 className='text-4xl text-blue-900 font-bold'>Orders</h2>
                  <p className='text-gray-500 font-semibold'>
                     {orders.length} {orders.length > 1 ? 'Items' : 'Item'}
                  </p>
                  <div className='mt-5'>
                     {orders.map(
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
                              className='bg-white text-gray-800 grid md:grid-cols-4 p-2 shadow rounded mb-5 gap-4'
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
                              <div className='justify-self-center self-center flex-col flex items-stretch'>
                                 <p
                                    className={`${
                                       orderStatus === 'pending'
                                          ? 'bg-red-600'
                                          : 'bg-green-600 '
                                    } px-3 py-2 text-white font-bold`}
                                 >
                                    status: {orderStatus.toUpperCase()}
                                 </p>
                                 {orderStatus === 'pending' ? (
                                    <button
                                       className='bg-green-600 hover:bg-green-400 text-white shadow px-3 py-2 mt-2 disabled:opacity-50'
                                       onClick={() => handleApproveOrder(_id)}
                                    >
                                       Approve Order
                                    </button>
                                 ) : (
                                    <button
                                       className='bg-gray-200 text-white shadow px-3 py-2 mt-2 cursor-not-allowed'
                                       disabled
                                    >
                                       Approve Order
                                    </button>
                                 )}
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
            position='top-left'
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

export default ManageAllOrders;
