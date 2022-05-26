import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAuth from '../../../hooks/useAuth';
import { signOut } from "firebase/auth";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import SingleOrder from './SingleOrder';
import { useNavigate } from 'react-router-dom';


const OrderReview = () => {
  const [orders,setOrders] =useState([]);
  const [auth] =useAuth();
  const [user]=useAuthState(auth)
  const navigate = useNavigate();
  useEffect(
    ()=>{
      if(user){
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url ,{
          method: 'Get',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        
      .then(res => {
        console.log('res',res);
        if(res.status ===401 || res.status === 403){
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate("/login");
        }
        return res.json()
      })
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
          <Th>S.L</Th>
          <Th>User</Th>
          <Th>Parts Name</Th>
          <Th>Phone number</Th>
          <Th>Quantity</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          orders.map((order,index) => <SingleOrder index={index} key={order._id} order={order}></SingleOrder>)
        }
         </Tbody>
    </Table>
    </div>
  );
};

export default OrderReview;