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
    const reviews = {
      name: data.name,
      comment: data.comment,
      ratting: data.ratting,
      img: data.img,
    };
    fetch("https://secret-coast-72696.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Thanks For Your Review? review add Successfully");
      });
    reset();
  };
  return (
    <section>
      <div>
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
              <span className="label-text">Comment</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Your Comment"
              className="input input-bordered w-full"
              {...register("comment", {
                required: {
                  value: true,
                  message: "comment Required",
                },
              })}
            />
            {errors.comment?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.comment.message}
              </span>
            )}
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Ratting</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your Ratting"
              className="input input-bordered w-full"
              {...register("ratting", {
                required: {
                  value: true,
                  message: "ratting Required",
                },
                max: {
                  value: 5,
                  message: "Enter a valid ratting",
                },
              })}
            />
            <label className="label">
              {errors.ratting?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.ratting.message}
                </span>
              )}
              {errors.ratting?.type === "max" && (
                <span className="label-text-alt text-red-500">
                  {errors.ratting.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Your img url</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your img url"
              className="input input-bordered w-full"
              {...register("img", {
                required: {
                  value: true,
                  message: "Url Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
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
    </section>
  );
};

export default AddReviews;
