import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    reset();
  };
  return (
    <section className=" bg-primary p-5">
      <h2 className="text-4xl font-bold mb-5 text-center text-white mt-5">
        Contact Us
      </h2>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Your message"
              className="input input-bordered w-full"
              {...register("message", {
                required: {
                  value: true,
                  message: "message Required",
                },
              })}
            />
            {errors.message?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "email Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Enter a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.pattern?.type === "max" && (
                <span className="label-text-alt text-red-500">
                  {errors.pattern.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Your phone</span>
            </label>
            <input
              type="phone"
              placeholder="Enter Your phone"
              className="input input-bordered w-full"
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone Required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn my-3 bg-secondary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
