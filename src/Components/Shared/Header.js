import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //   dark-light, profile-img
    return (
        <div className="bg-blue-600">
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between z-50">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            title="Learn-With-Labib"
                            className="inline-flex items-center mr-8 curly"
                        >
                            <img src={logo} alt="logo" className='w-14' />
                            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase hover:text-black">
                                Learn-With-Labib
                            </span>
                        </Link>
                    </div>

                    <div>
                        <ul className="items-center hidden space-x-8 lg:flex ">
                            <li>
                                <NavLink
                                    to="/home"
                                    title="Home"
                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/categories"
                                    title="Courses"
                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faq"
                                    title="FAQ"
                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                >
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/login"
                                title="Log in / Sign in"
                                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                            >
                                Sign in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-xl"
                                title="Register / Sign up"
                            >
                                Sign up
                            </NavLink>
                        </li>
                    </ul>
                    {/* toggle */}
                    <div className="lg:hidden">
                        <button
                            title="Open Menu"
                            className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline -mt-2 -mr-1  hover:bg-white focus:bg-gray-200"
                            // className="-mt-2 -mr-2  hover:bg-white focus:bg-gray-200"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-black" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-blue-400 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                title="Learn-With-Labib"
                                                className="inline-flex items-center"
                                            >
                                                <img src={logo} alt="logo" className='w-14' />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase hover:text-black">
                                                    Learn-With-Labib
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-black" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"

                                                    title="Home"
                                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/courses"
                                                    title="Courses"
                                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/faq"
                                                    title="FAQ"
                                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                                >
                                                    FAQ
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/login"
                                                    title="Log in / Sign in"
                                                    className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-black text-xl"
                                                >
                                                    Sign in
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/register"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-xl"
                                                    title="Register / Sign up"
                                                >
                                                    Sign up
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;