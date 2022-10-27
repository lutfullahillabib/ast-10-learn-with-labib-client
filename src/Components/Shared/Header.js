import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import logo from '../../img/logo.png'

import { Tooltip } from "@material-tailwind/react";



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div className="bg-blue-600 sticky top-0 z-50">
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between z-50">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            title="Learn-With-Labib"
                            className="inline-flex items-center mr-8 curly"
                        >
                            <img src={logo} alt="logo" className='w-14' />
                            <span className="ml-2 text-lg md:text-xl font-bold tracking-wide text-white uppercase hover:text-black">
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

                        </ul>
                    </div>

                    <ul className="items-center hidden space-x-8 lg:flex">
                        {
                            user?.uid ?
                                <>
                                    <span className='font-semibold text-xl text-black hover:text-yellow-300'>{user?.displayName}</span>

                                    <li>
                                        <NavLink
                                            onClick={handleLogOut}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-800 
                                            hover:text-white
                                            focus:shadow-outline focus:outline-none text-xl"
                                            title="Log Out / Sign Out"
                                        >
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
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
                                </>
                        }

                        <Tooltip
                            content={
                                user?.displayName ?
                                    user?.displayName
                                    :
                                    "Profile"
                            }
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                            }}
                        >

                            <Link to="/">
                                {user?.photoURL ?
                                    <img
                                        src={user?.photoURL}
                                        alt='Profile'
                                        title={user?.displayName}
                                        className='h-12 w-12 rounded-full'
                                    >
                                    </img>
                                    :
                                    <FaUserAlt
                                        title='Profile'
                                        className='rounded-full bg-blue-100 p-2 h-12 w-12'
                                    ></FaUserAlt>
                                }
                            </Link>

                        </Tooltip>

                    </ul>

                    <div >
                        <label className="swap swap-rotate">

                            <input type="checkbox" className='hidden' />

                            <svg className="swap-on fill-current w-10 h-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-off fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>

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
                                                className="inline-flex items-center "
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

                                            {
                                                user?.uid ?
                                                    <>
                                                        <li>
                                                            <span className='font-semibold text-xl text-black hover:text-yellow-300 pt-4'>{user?.displayName}</span>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                onClick={handleLogOut}
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-xl hover:text-white"
                                                                title="Log Out / Sign Out"
                                                            >
                                                                Sign Out
                                                            </NavLink>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
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
                                                    </>
                                            }


                                            <Tooltip
                                                content={
                                                    user?.displayName ?
                                                        user?.displayName
                                                        :
                                                        "Profile"
                                                }
                                                animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0, y: 25 },
                                                }}
                                            >

                                                <li className='flex justify-center'>
                                                    <Link to="/">
                                                        {user?.photoURL ?
                                                            <img
                                                                src={user?.photoURL}
                                                                alt='Profile'
                                                                title={user?.displayName}
                                                                className='h-12 w-12 rounded-full'
                                                            >
                                                            </img>
                                                            :
                                                            <FaUserAlt
                                                                title='Profile'
                                                                className='rounded-full bg-blue-100 p-2 h-12 w-12'
                                                            ></FaUserAlt>
                                                        }
                                                    </Link>
                                                </li>

                                            </Tooltip>

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
