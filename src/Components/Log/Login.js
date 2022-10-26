import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div className='flex justify-center items-center py-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-blue-600 text-white">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="space-y-6 ">
                    <div className="space-y-1">
                        <label for="email" className="block text-white text-start font-semibold text-xl">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                    </div>
                    <div className="space-y-1">
                        <label for="password" className="block text-white text-start font-semibold text-xl">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                        <div className="flex justify-between font-medium italic py-5">

                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-blue-900 focus:border-blue-900 focus:ring-2 accent-blue-900 h-5 w-5" />

                                <label for="remember" className="pl-2 text-white hover:text-black hover:underline cursor-pointer">Remember me</label>
                            </div>

                            <Link to='/' className='hover:text-black text-white hover:underline cursor-pointer'>Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                    <p className="px-3 text-white">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button title="Log in with Google" className="p-3 hover:bg-blue-100 hover:text-black rounded-full">
                        <FaGoogle className='text-3xl' />
                    </button>

                    <button title="Log in with GitHub" className="p-3  hover:bg-blue-100 hover:text-black rounded-full">
                        <FaGithub className='text-3xl' />
                    </button>
                </div>

                <p className="italic text-center sm:px-6  text-white">Don't have an account?
                    <Link to='/register' title='Register / Sign Up' className="underline text-white not-italic font-medium px-3 hover:text-black">Sign up</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;


