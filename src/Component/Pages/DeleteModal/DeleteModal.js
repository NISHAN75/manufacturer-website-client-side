import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({removeUser ,refetch ,setRemoveUser}) => {
  const {email}=removeUser;
  const handleDelete = (email) => {
      const url = `http://localhost:5000/user/${removeUser.email}`;
      fetch(url, {
        method: "DELETE",
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success('Remove This user successfully');
            setRemoveUser(null)
           refetch()
            
          }
        });
    
  };
  return (
    <div>
      
      <input type="checkbox" id="delete-conform" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
           Are You Sure You Want to delete {email} this user?
          </h3>
          <p class="py-4">
            
          </p>
          <div class="modal-action">
          <button onClick={ () =>handleDelete(removeUser.email)} class="btn bg-red-500  hover:bg-white hover:text-black">Remove User</button>
            <label for="delete-conform" class="btn bg-green-500   hover:bg-white hover:text-black px-10">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;