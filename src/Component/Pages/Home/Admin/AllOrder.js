import React from "react";
import { Td, Tr } from "react-super-responsive-table";

const AllOrder = ({ order, index, setRemoveOrder }) => {
  console.log(order);
  return (
    <Tr className="p-20 hover:bg-primary hover:text-white font-bold border-b-4 border-primary">
      <Td className="p-5">{index + 1}</Td>
      <Td className="p-5">{order?.user}</Td>
      <Td className="p-5">{order?.partName}</Td>
      <Td className="p-5">{order?.userPhone}</Td>
      <Td className="p-5">{order?.quantity}</Td>
      <Td className="p-5">${order?.pay}</Td>
      <Td className="p-5">
        {!order?.paid && (
          <label
            onClick={() => setRemoveOrder(order)}
            htmlFor="order-delete-conform"
            className="btn  bg-red-500 hover:bg-white hover:text-black px-10 mt-2"
          >
            Delete
          </label>
        )}
      </Td>
    </Tr>
  );
};

export default AllOrder;
