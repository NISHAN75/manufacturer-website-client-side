import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
  const {id}=useParams();
  const url = `http://localhost:5000/orders/${id}`;
  const {data: order,isLoading}=useQuery(['orders',id], ()=> fetch(url,{
    method: 'GET',
    headers:{
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }))
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-center text-primary font-bold text-4xl mt-5">Please  payment:{id}</h2>
    </div>
  );
};

export default Payment;