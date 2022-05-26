import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAuth from '../../../hooks/useAuth';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import SingleOrder from './SingleOrder';

const OrderReview = () => {
  const [orders,setOrders] =useState([]);
  const [auth] =useAuth();
  const [user]=useAuthState(auth)
  useEffect(
    ()=>{
      if(user){
        const url = `http://localhost:5000/orders?email=${user.email}`;
        console.log(url);
        fetch(url)
        
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setOrders(data)
      })
      }
    }
    ,[user])
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-primary mt-5">Your Order : {orders.length}</h1>
      <Table className="text-left px-5 mt-10">
      <Thead>
        <Tr className="bg-primary text-white uppercase">
          <Th>User</Th>
          <Th>Parts Name</Th>
          <Th>Phone number</Th>
          <Th>Quantity</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          orders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
        }
         </Tbody>
    </Table>
    </div>
  );
};

export default OrderReview;