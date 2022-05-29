import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Table, Tbody, Th, Thead, Tr } from 'react-super-responsive-table';
import useAdmin from '../../../../hooks/useAdmin';
import useAuth from '../../../../hooks/useAuth';
import AllProduct from './AllProduct';
import ManageProducts from './ManageProducts';

const AllProducts = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [deleteProduct,setDeleteProduct]=useState(null)
  const [allProducts, setAllProducts] = useState([]);
  console.log(deleteProduct);
  useEffect(() => {
    if (admin) {
      const url = "http://localhost:5000/services";
      fetch(url, {
        method: "Get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAllProducts(data);
        });
    }
  }, [admin]);
  return (
    <section>
      <h2 className="text-center font-bold mt-5 text-primary text-4xl">All Order : {allProducts.length}</h2>
      <Table className="text-left my-10">
      <Thead>
            <Tr className="bg-primary text-white uppercase">
              <Th>S.L</Th>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>minimum</Th>
              <Th>available</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
      <Tbody>
        {
          allProducts.map((product,index) => <AllProduct key={product._id} setDeleteProduct={setDeleteProduct} index={index} product={product} setAllProducts={setAllProducts}></AllProduct>)
        }
      </Tbody>
    </Table>
    {
      deleteProduct && <ManageProducts
      allProducts={allProducts}
      setDeleteProduct={setDeleteProduct}
      setAllProducts={setAllProducts}
      deleteProduct={deleteProduct}
      ></ManageProducts>
    }
    </section>
  );
};

export default AllProducts;