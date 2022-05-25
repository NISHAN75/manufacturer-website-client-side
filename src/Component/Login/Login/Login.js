import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useAuth from "../../../hooks/useAuth";




const Login = () => {
  const [auth] =useAuth();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(user){
    console.log(user);
  }
  if(error){
    console.log(error);
    
  }
  return (
    <section className=" flex h-screen justify-center items-center">
      <div class="card card-compact w-3/5 shadow-xl">
      <div class="card-body">
        <h2 class="card-title  justify-center mb-10">Login</h2>
        <div class="card-actions justify-center">
          <button class="btn btn-primary px-10 text-white hover:bg-white hover:text-black">Login</button>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle() } class="btn btn-primary  text-white font-bold text-xxl hover:bg-white hover:text-black">Continue With Google</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
