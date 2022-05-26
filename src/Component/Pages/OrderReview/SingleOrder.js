import React from "react";
import {Tr, Td } from "react-super-responsive-table";

const SingleOrder = ({ order }) => {
  return (
      <Tr className="hover:bg-primary hover:text-white font-bold">
        <Td>{order?.user}</Td>
        <Td>{order?.partName}</Td>
        <Td>{order?.userPhone}</Td>
        <Td>{order?.quantity}</Td>
      </Tr>
  );
};

export default SingleOrder;
