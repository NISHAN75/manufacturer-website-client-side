import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const PartDetalis = () => {
  const { id } = useParams();
  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  const [auth]=useAuth();
  const [user] =useAuthState(auth);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async(data) =>{
    console.log(data)
  }

  console.log(part);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-10 justify-center my-20">
      <div class="card card-compact w-96 h-4/5 mt-40 text-left shadow-xl flex">
        <figure>
          <img src={part.img} alt="parts img" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <span className="text-primary font-bold text-xl mr-3">
              Part name:
            </span>
            {part.name}
          </h2>
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 text-primary">minimum Order:</span>
            <span>{part.minimum}</span>
          </p>
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 text-primary">Available:</span>
            <span>{part.available}</span>
          </p>
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 text-primary">Price:</span>
            <span>${part.price}</span>
          </p>
        </div>
      </div>
      <div class="card card-compact w-96  shadow-xl flex">
        
        <div class="card-body">
          <h2 class="card-title text-primary justify-center font-bold">
            Enter Your information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  
                  class="input input-bordered w-full"
                  {...register(
                    "name",
                    {
                      required: {
                        value: true,
                        message: "Name Required",
                      }
                    }
                  )}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  placeholder="Enter Your Email"
                  class="input input-bordered w-full"
                />
              </div>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder="Enter Your phone"
                  class="input input-bordered w-full"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.phone?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  class="input input-bordered w-full"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.address?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="phone"
                  placeholder="Enter Your Quantity"
                  class="input input-bordered w-full"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "quantity Required",
                    },
                  })}
                />
                <label class="label">
                  {errors.quantity?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
                type="submit"
                value="Confirm Booking"
              />
            </form>
        </div>
      </div>
    </section>
  );
};

export default PartDetalis;
