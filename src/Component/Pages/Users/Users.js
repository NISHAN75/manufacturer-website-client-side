import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import User from './User';

const Users = () => {
  const {data: users, isLoading,refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
   method: 'GET',
   headers:{
     authorization: `Bearer ${localStorage.getItem('accessToken')}`
   }
 }).then(res => res.json()));
 if(isLoading){
   return <Loading></Loading>
 }
  return (
    <div>
      <h2 className="text-primary font-bold text-center mt-5 text-xl mb-5">All users :{users.length}</h2>

      <Table className="text-left w-full">
      <Thead className=" text-black uppercase">
        <Tr>
          <Th>S.L</Th>
          <Th>Email</Th>
          
        </Tr>
      </Thead>
      <Tbody>
        {
          users.map((user,index) => <User index={index} refetch={refetch} key={user._id} user={user}></User>)
        }
      </Tbody>
    </Table>
    </div>
  );
};

export default Users;