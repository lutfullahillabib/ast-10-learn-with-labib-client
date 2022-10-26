import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
    return (
        <div className='flex justify-center items-center py-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-blue-600 text-white">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form className="space-y-6 ">
                    <div className="space-y-1">
                        <label for="name" className="block text-white text-start font-semibold text-xl">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" />
                    </div>
                    <div className="space-y-1">
                        <label for="photo" className="block text-white text-start font-semibold text-xl">Photo-URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo-URL" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" />
                    </div>
                    <div className="space-y-1">
                        <label for="email" className="block text-white text-start font-semibold text-xl">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                    </div>
                    <div className="space-y-1">
                        <label for="password" className="block text-white text-start font-semibold text-xl">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                        <div className="flex items-center font-medium italic py-5">
                            <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-blue-900 focus:border-blue-900 focus:ring-2 accent-blue-900 h-5 w-5" />

                            <label for="remember" className="pl-2 text-white hover:text-black hover:underline cursor-pointer">
                                Accept <Link className='underline text-blue-900 hover:text-white'>Terms & Conditions</Link> .
                            </label>
                        </div>

                    </div>
                    <button className="block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                    <p className="px-3 text-white">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button title=" Register with Google" className="p-3 hover:bg-blue-100 hover:text-black rounded-full">
                        <FaGoogle className='text-3xl' />
                    </button>

                    <button title=" Register with GitHub" className="p-3  hover:bg-blue-100 hover:text-black rounded-full">
                        <FaGithub className='text-3xl' />
                    </button>
                </div>

                <p className="italic text-center sm:px-6  text-white">Already have an account?
                    <Link to='/register' title='Login / Sign in' className="underline text-white not-italic font-medium px-3 hover:text-black">Sign in</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;

