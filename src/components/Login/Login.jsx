import React from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {

  
  return (
    <>
<div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
<div className="sm:w-full sm:max-w-sm sm:mx-auto">
          <img
            className="mx-auto h-20 w-auto"
            src="https://media.istockphoto.com/id/1220134013/vector/s-h.webp?s=1024x1024&w=is&k=20&c=dz_2Ltho0TgXW8mS8D_gpwYDgal2euF402Rq6HcxHJk="
            alt="Your Company"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-center mx-auto md:text-5xl xl:text-6xl font-serif text-blue-500">
Our Services would be displayed here after Signing in and logging through it</h1>
       
        </div>
      </div>
    </>
  );
};

export default Login;
