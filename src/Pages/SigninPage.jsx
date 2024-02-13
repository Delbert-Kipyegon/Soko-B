import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

const SigninPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-600 h-screen flex flex-col gap-4 items-center justify-center w-full">
      <div className=" fixed top-28">
        <h1 className='text-white font-extrabold text-center text-4xl'>SOKO <br /> BEAUTY</h1>
        <p className="text-white pt-4 font-medium text-lg text-center">Everything Beauty</p>
      </div>
      <div className=" fixed inset-x-0  h-[66%] bg-white bottom-0 p-8 rounded-t-2xl shadow-md w-full ">
        <h2 className="text-2xl text-red-700  font-bold mb-6 text-center">SIGN IN</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-red-600 text-md font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border border-red-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-red-600 text-md font-bold mb-2">Password</label>
          <input type="password" id="password" className="shadow appearance-none border border-red-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-gradient-to-r from-red-900 to-red-600 hover:bg-red-700 text-white font-bold py-2 w-full mx-auto rounded focus:outline-none focus:shadow-outline" type="button">
            SIGN IN
          </button>
        </div>
        <div className="text-center my-4 text-red-700 font-bold">OR SIGN IN WITH</div>
        <div className="flex justify-center mb-6">

          {/* Icons are placeholders, replace with actual icons */}
          <button aria-label="Sign up with Google" className="text-gray-500 mx-2">
          <FcGoogle className='text-4xl' />
          </button>
          <button aria-label="Sign up with Apple" className="text-gray-500 mx-2">
          <FaApple className='text-4xl' />
          </button>
          <button aria-label="Sign up with Facebook" className="text-gray-500 mx-2">
          <BsFacebook className='text-4xl text-blue-700' />
          </button>
        </div>
        <div className="text-center">
            <p className="inline-block align-baseline font-bold text-lg text-red-600">Not a User?</p>
            <br />
          <a href="/login" className="inline-block align-baseline font-bold text-lg  text-red-600 hover:text-red-800">
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
