import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';

import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                toast.success(`Registration Successful, 'Email' = ${user.email}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '✔️',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });

            })
            .catch(error => {
                console.error(error)
                toast.error(`Error = ${error.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');

                if (user.email != null) {
                    toast.success(`Registration Successful, 'Email' = ${user.email}`, {
                        duration: 3000,
                        position: "top-center",

                        // Styling
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                        className: "",

                        // Custom Icon
                        icon: '✔️',

                        // Change colors of success/error/loading icon
                        iconTheme: {
                            primary: "#000",
                            secondary: "#fff",
                        },

                        // Aria
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });
                }
                else {
                    toast.success(`Registration Successful, 'Name' = ${user.displayName}`, {
                        duration: 3000,
                        position: "top-center",

                        // Styling
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                        },
                        className: "",

                        // Custom Icon
                        icon: '✔️',

                        // Change colors of success/error/loading icon
                        iconTheme: {
                            primary: "#000",
                            secondary: "#fff",
                        },

                        // Aria
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });
                }


            })
            .catch(error => {
                console.error(error)
                toast.error(`Error = ${error.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            })

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photoURL, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError("Your Password didn't match.");

            toast.error(`Error = Your Password didn't match.`, {
                duration: 3000,
                position: "top-center",

                // Styling
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
                className: "",

                // Custom Icon
                icon: '❌',

                // Change colors of success/error/loading icon
                iconTheme: {
                    primary: "#000",
                    secondary: "#fff",
                },

                // Aria
                ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                },
            });

            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);

                toast.success(`Registration Successful, 'Email' = ${email}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '✔️',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });

                navigate('/');

            })

            .catch(e => {
                console.error(e);
                setError(e.message);

                toast.error(`Error = ${e.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });

            });
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
                toast.error(`Error = ${error.message}`, {
                    duration: 3000,
                    position: "top-center",

                    // Styling
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                    className: "",

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },

                    // Aria
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite",
                    },
                });
            });
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='flex justify-center items-center py-20'>
            <div className="w-11/12 mx-auto md:w-full max-w-md p-8 space-y-3 rounded-xl bg-blue-600 text-white">
                <h1 className="text-2xl font-bold text-center">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block text-white text-start font-semibold text-xl">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="photoURL" className="block text-white text-start font-semibold text-xl">Photo-URL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo-URL" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-white text-start font-semibold text-xl">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-white text-start font-semibold text-xl">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />

                        <div className="space-y-1 py-3">
                            <label htmlFor="confirmPassword" className="block text-white text-start font-semibold text-xl">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md outline-blue-700 bg-blue-100  text-black font-medium text-lg placeholder:text-blue-700 placeholder:font-medium placeholder:italic" required />
                        </div>

                        <div className="flex items-center font-medium italic py-5">
                            <input type="checkbox" name="remember" id="remember" className=" rounded-md focus:ring-blue-900 focus:border-blue-900 focus:ring-2 accent-blue-900 h-5 w-5" onClick={handleAccepted} />

                            <label htmlFor="remember" className="pl-2 text-white hover:text-black hover:underline cursor-pointer">
                                Accept <Link className='underline text-blue-900 hover:text-white'>Terms & Conditions</Link> .
                            </label>
                        </div>

                    </div>
                    <button disabled={!accepted} className="disabled:bg-gray-700 hover:disabled:bg-red-700 hover:disabled:text-white block w-full p-3 text-center text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300">Sign Up</button>
                </form>

                <p className='text-red-600 font-semibold text-xl'>{error}</p>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                    <p className="px-3 text-white">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16  bg-black"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button

                        onClick={handleGoogleSignIn} title="Register with Google"

                        className="p-3 hover:bg-blue-100 hover:text-black rounded-full">

                        <FaGoogle className='text-3xl' />
                    </button>

                    <button onClick={handleGitHubSignIn} title="Register with GitHub" className="p-3  hover:bg-blue-100 hover:text-black rounded-full">
                        <FaGithub className='text-3xl' />
                    </button>
                </div>

                <p className="italic text-center sm:px-6  text-white">Already have an account?
                    <Link to='/login' title='Login / Sign in' className="underline text-white not-italic font-medium px-3 hover:text-black">Sign in</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;

