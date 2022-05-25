import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle,useUpdateProfile  } from "react-firebase-hooks/auth";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Loading from "../../Pages/Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const Register = () => {
  const [auth] = useAuth();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updatingLoading, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, verifySending, verifyError] = useSendEmailVerification(
    auth
  );
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async(data) =>{
    console.log(data);
    const displayName = data.name
    await createUserWithEmailAndPassword(data.email, data.password,data.name);
    await sendEmailVerification();
    await updateProfile({displayName});
    alert("Please Verify Your Email")
    reset();
  }
  const navigate=useNavigate();
  let errorElement;
  if(error || gError || verifyError || updateError){
    errorElement =<p className="text-red-500 mb-5"><small>{error?.message || gError?.message || verifyError?.message || updateError?.message}</small></p>
  }
  if(loading || gLoading || verifySending || updatingLoading){
    return <Loading></Loading>
  }
  
  if (user || gUser) {
    navigate('/home')
  }

  return (
    <section className=" flex h-screen justify-center items-center">
      <div class="card card-compact w-96 shadow-xl">
        <div class="card-body w-full">
          <h2 class="card-title  justify-center mb-10">Please Register</h2>
          <div class="card-actions justify-center">
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
                  placeholder="Enter Your Email"
                  class="input input-bordered w-full"
                  {...register(
                    "email",
                    {
                      required: {
                        value: true,
                        message: "Email Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Enter a valid Email",
                      }
                    }
                  )}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-80 max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your password"
                  class="input input-bordered w-full"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must Be enter 6 characters or Longer",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {
              errorElement
            }
              <input
                className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
                type="submit"
                value="Register"
              />
            </form>
            <p className="text-xl text-primary text-center"><small><Link to="/login">Already Have a Account? please Login</Link></small></p>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-primary  text-white font-bold text-xxl hover:bg-white hover:text-black"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
