import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { toast } from "react-toastify";

const User = ({ user, index, refetch, setRemoveUser }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://secret-coast-72696.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Falied to Make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successful make a admin");
        }
      });
  };

  return (
    <Tr className=" hover:bg-primary hover:text-white font-bold border-b-4 border-primary">
      <Th>{index + 1}</Th>
      <Td className="p-8">{user?.email}</Td>
      <Td className="p-8">
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-primary hover:bg-white"
          >
            Make admin
          </button>
        )}
      </Td>
      <Td className="p-8">
        <label
          onClick={() => setRemoveUser(user)}
          htmlFor="delete-conform"
          className="btn  bg-red-500 hover:bg-white hover:text-black"
        >
          Remove User
        </label>
      </Td>
    </Tr>
  );
};

export default User;
