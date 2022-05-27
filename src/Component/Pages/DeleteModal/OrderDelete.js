import React from 'react';
import { toast } from 'react-toastify';

const OrderDelete = ({setRemoveOrder , setOrders ,removeOrder ,orders}) => {
  console.log(removeOrder);
  
  const {userEmail , partName}=removeOrder;
  const handleDelete = (partId) => {
      console.log("click", partId);
      const url = `http://localhost:5000/orders?email=${removeOrder.userEmail}`;
      console.log(url);
      
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log('hi');
            const remaining = orders.filter((order) => order.partId !== partId );
            toast.success('Delete Successfully')
            setRemoveOrder(null)
            setOrders(remaining);
          }
        });
    
  };
  return (
    <div>
      
      <input type="checkbox" id="order-delete-conform" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
           Are You Sure You Want to Delete<br/> <span className="text-green-500">{partName}</span>?
          </h3>
          <p class="py-4">
            
          </p>
          <div class="modal-action">
          <button onClick={ () =>handleDelete(removeOrder.partId)} class="btn bg-red-500  hover:bg-white hover:text-black px-10">Delete</button>
            <label for="order-delete-conform" class="btn bg-green-500   hover:bg-white hover:text-black px-10">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDelete;