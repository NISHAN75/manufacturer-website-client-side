import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  console.log(user.displayName);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const imgStorageKey = "1917252678d6bb9e9686c386e330234a";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formDate = new FormData();
    formDate.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const myProfile = {
            name: data.name,
            email: data.email,
            fUrl: data.facebook,
            lUrl: data.linkedin,
            img: img,
          };

          //  send to database
          fetch("https://secret-coast-72696.herokuapp.com/profile", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(myProfile),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Profile information Added Successfully");
                reset();
              } else {
                toast.error("Sorry! Did not add Profile");
              }
            });
        }
        console.log("imgdb", result);
      });

    // reset();
  };
  return (
    <section>
      <h2 className="text-primary font-bold text-2xl mt-5 text-center">
        Update Your Information
      </h2>
      <div className="flex h-screen justify-center items-center mt-20 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Profile Name</span>
            </label>
            <input
              name="name"
              value={user?.displayName}
              readOnly
              disabled
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
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              disabled
              placeholder="Enter Your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "email Required",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Facebook url</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your facebook url"
              className="input input-bordered w-full"
              {...register("facebook", {
                required: {
                  value: true,
                  message: "facebook url Required",
                },
              })}
            />
            <label className="label">
              {errors.facebook?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.facebook.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Linkedin url</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Ratting"
              className="input input-bordered w-full"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin Required",
                },
              })}
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.linkedin.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              placeholder="Enter Your password"
              className="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: "image Url Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
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

export default Profile;
