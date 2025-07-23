import React, { useContext } from 'react';
import Navbar from './shared/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
  const {signInUser} = useContext(AuthContext);

  const handleLogIn = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

    signInUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }
    return (
      <div>
        <Navbar></Navbar>
        <div className="md:w-1/2 mx-auto py-16 px-24 bg-[#f8f7f7] rounded-xl">
          <h2 className="text-4xl font-semibold text-center">
            Login your account
          </h2>
          <hr className="my-12" />
          <form onSubmit={handleLogIn}>
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
          <p className='mt-5'>Don't have an account? please <Link to="/register" className='text-blue-600 font-medium'>Register</Link></p>
        </div>
      </div>
    );
};

export default Login;