import React from 'react';
import Navbar from './shared/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="md:w-1/2 mx-auto py-16 px-24 bg-[#f8f7f7] rounded-xl">
          <h2 className="text-4xl font-semibold text-center">
            Register your account
          </h2>
          <hr className="my-12" />
          <form>
            <div>
              <p className="mb-[15px] font-semibold text-xl">Your Name</p>
              <input
                className="p-5 bg-[#F3F3F3] rounded-lg"
                type="text"
                name="name"
                placeholder="Enter your name"
                id=""
              />
            </div>
            <div className="my-6">
              <p className="mb-[15px] font-semibold text-xl">Photo URL</p>
              <input
                className="p-5 bg-[#F3F3F3] rounded-lg"
                type="text"
                name="photo"
                placeholder="Enter your phot URL"
                id=""
              />
            </div>
            <div>
              <p className="mb-[15px] font-semibold text-xl">Email address</p>
              <input
                className="p-5 bg-[#F3F3F3] rounded-lg"
                type="email"
                name="email"
                placeholder="Enter your email address"
                id=""
              />
            </div>
            <div className="my-6">
              <p className="mb-[15px] font-semibold text-xl">Password</p>
              <input
                className="p-5 bg-[#F3F3F3] rounded-lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                id=""
              />
            </div>
            <input
              className="btn btn-wide bg-[#403F3F] text-[#FFFFFF]"
              type="submit"
              value="Login"
            />
          </form>
          <p className="mt-5">
            Don't have an account? please{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;