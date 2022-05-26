import React from "react";
import {Tr, Td } from "react-super-responsive-table";

const SingleOrder = ({ order ,index ,handleDelete }) => {
  console.log(order);
  
  return (
      <Tr className="p-20 hover:bg-primary hover:text-white font-bold border-b-4 border-primary">
        <Td className="p-5">{index + 1}</Td>
        <Td className="p-5">{order?.user}</Td>
        <Td className="p-5">{order?.partName}</Td>
        <Td className="p-5">{order?.userPhone}</Td>
        <Td className="p-5">{order?.quantity}</Td>
        <Td className="p-5"><button onClick={()=>handleDelete(order.partId)} class="btn btn-error px-10 hover:bg-white">Delete</button></Td>
      </Tr>
  );
};

export default SingleOrder;
