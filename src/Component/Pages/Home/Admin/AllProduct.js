import React from "react";
import { Td, Tr } from "react-super-responsive-table";

const AllOrder = ({ setDeleteProduct, index, product, setAllProducts }) => {
  console.log(product);
  return (
    <Tr className="p-20 hover:bg-primary hover:text-white font-bold border-b-4 border-primary">
      <Td className="p-5">{index + 1}</Td>
      <Td className="p-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={product?.img} alt="" />
          </div>
        </div>
      </Td>
      <Td className="p-5">{product?.name}</Td>
      <Td className="p-5">{product?.minimum}</Td>
      <Td className="p-5">{product?.available}</Td>
      <Td className="p-5">${product?.price}</Td>
      <Td className="p-5">
        {!product?.paid && (
          <label
            onClick={() => setDeleteProduct(product)}
            htmlFor="order-products-delete-conform"
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
