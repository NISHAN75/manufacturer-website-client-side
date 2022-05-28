import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddReviews = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
     console.log(data);
    const reviews ={
      name:data.name,
      comment:data.comment,
      ratting:data.ratting,
      img:data.img
    }
    fetch('http://localhost:5000/reviews',{
          method:'POST',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data=> {
          console.log(data)
        })
    // navigate("/home");
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
          name="name"
            type="text"
            placeholder="Enter Your Name"
            class="input input-bordered w-full"
            {...register("name", {
              required: {
                value: true,
                message: "Name Required",
              },
            })}
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
            <span class="label-text">Comment</span>
          </label>
          <textarea
            type="text"
            placeholder="Enter Your Comment"
            class="input input-bordered w-full"
            {...register("comment", {
              required: {
                value: true,
                message: "comment Required",
              }
            })}
          />
          {errors.comment?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.comment.message}
              </span>
            )}
        </div>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Ratting</span>
          </label>
          <input
            type="number"
            placeholder="Enter Your Ratting"
            class="input input-bordered w-full"
            {...register("ratting", {
              required: {
                value: true,
                message: "ratting Required",
              }
            })}
          />
          <label class="label">
            {errors.ratting?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.ratting.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Your img</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your password"
            class="input input-bordered w-full"
            {...register("img", {
              required: {
                value: true,
                message: "Url Required",
              }
            })}
          />
          <label class="label">
            {errors.img?.type ==="required" && (
              <span class="label-text-alt text-red-500">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddReviews;
