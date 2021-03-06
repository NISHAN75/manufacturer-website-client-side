import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../../../hooks/useAdmin";
import useAuth from "../../../../hooks/useAuth";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import AllOrder from "./AllOrder";
import MangeModal from "./MangeModal";

const AllOrders = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [allOrders, setAllOrders] = useState([]);
  const [removeOrder, setRemoveOrder] = useState(null);

  useEffect(() => {
    if (admin) {
      const url = "https://secret-coast-72696.herokuapp.com/allOrders";
      fetch(url, {
        method: "Get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAllOrders(data);
        });
    }
  }, [admin]);
  return (
    <section>
      <h2 className="text-center font-bold mt-5 text-primary text-4xl">
        All Order : {allOrders.length}
      </h2>
      <Table className="text-left my-10">
        <Thead>
          <Tr className="bg-primary text-white uppercase">
            <Th>S.L</Th>
            <Th>User</Th>
            <Th>Parts Name</Th>
            <Th>Phone number</Th>
            <Th>Order Quantity</Th>
            <Th>Payment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allOrders.map((order, index) => (
            <AllOrder
              setRemoveOrder={setRemoveOrder}
              index={index}
              order={order}
            ></AllOrder>
          ))}
        </Tbody>
      </Table>
      {removeOrder && (
        <MangeModal
          allOrders={allOrders}
          setRemoveOrder={setRemoveOrder}
          setAllOrders={setAllOrders}
          removeOrder={removeOrder}
        ></MangeModal>
      )}
    </section>
  );
};

export default AllOrders;
