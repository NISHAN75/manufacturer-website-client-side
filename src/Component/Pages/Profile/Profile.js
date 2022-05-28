import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Profile = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const imgStorageKey='1917252678d6bb9e9686c386e330234a';

  const onSubmit = async (data) => {
     console.log(data);
     const image=data.image[0];
     const formDate=new FormData();
     formDate.append('image',image);
     const url=`https://api.imgbb.com/1/upload?key=${imgStorageKey}`
     fetch(url,{
       method:'POST',
       body: formDate
     })
     .then(res => res.json())
     .then(result => {
       if(result.success){
         const img= result.data.url;
         const myProfile={
           name:data.name,
           email:data.email,
           fUrl:data.facebook,
           lUrl:data.linkedin,
           img:img
         }

        //  send to database
        fetch('http://localhost:5000/profile',{
          method:'POST',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(myProfile)
        })
        .then(res => res.json())
        .then(inserted=> {
          if(inserted.insertedId){
            toast.success('Profile information Added Successfully')
            reset();
          }
          else{
            toast.error('Sorry! Did not add Profile')
          }
        })
       }
       console.log('imgdb',result);
     })
   
    // reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Profile Name</span>
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
            <span class="label-text">Email Address</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your email"
            class="input input-bordered w-full"
            {...register("email", {
              required: {
                value: true,
                message: "email Required",
              }
            })}
          />
          {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
        </div>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Facebook url</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your facebook url"
            class="input input-bordered w-full"
            {...register("facebook", {
              required: {
                value: true,
                message: "facebook url Required",
              }
            })}
          />
          <label class="label">
            {errors.facebook?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.facebook.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Linkedin url</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Ratting"
            class="input input-bordered w-full"
            {...register("linkedin", {
              required: {
                value: true,
                message: "linkedin Required",
              }
            })}
          />
          <label class="label">
            {errors.linkedin?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-80 max-w-xs">
          <label class="label">
            <span class="label-text">Your Photo</span>
          </label>
          <input
            type="file"
            placeholder="Enter Your password"
            class="input input-bordered w-full"
            {...register("image", {
              required: {
                value: true,
                message: "image Url Required",
              }
            })}
          />
          <label class="label">
            {errors.image?.type ==="required" && (
              <span class="label-text-alt text-red-500">
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
  );
};

export default Profile;