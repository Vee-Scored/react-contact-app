import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SignUpSuccess = () => {
  const exitToken = localStorage.getItem('token')
  
  useEffect(()=>{
    if (exitToken) {
      nav("/indexPage")
    }
  },[exitToken])
  return (
    <div className="flex min-h-screen justify-center  items-center">
      <div className="border border-slate-300 shadow-md rounded py-5 px-4">
        <p className="text-3xl font-serif  text-green-600 font-semibold">
          Account Created Successfully !!
        </p>
        <p className="text-lg text-center font-serif">
            Go to <Link to="/login"><p className="underline font-semibold inline-flex">Login Page</p></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpSuccess;
