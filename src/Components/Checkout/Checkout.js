import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data)
    const { course_name, image, price, author , id} = data
    const { user } = useContext(AuthContext);

    const priceInt = parseInt(price);
    const tax = parseFloat(priceInt * 0.1).toFixed(2);
    const total = parseFloat(priceInt + (parseFloat(tax))).toFixed(2);

    return (
        <div className='flex justify-center py-28'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-blue-600">
                <h1 className='text-3xl font-semibold text-white underline'>Complete Your Enrollment</h1>

                <div className="flex space-x-4 justify-center">

                    <div className="flex items-center space-y-1">
                        <p className="text-2xl font-semibold">Author: <span className='text-white'>{author}</span> </p>
                    </div>
                </div>

                <div>

                    <img src={image} alt="" className=" w-full mb-4 h-60 sm:h-96 rounded-3xl" />

                    <h2 className="mb-1 text-2xl font-bold text-white">{course_name}</h2>

                </div>

                <hr className='bg-blue-900 h-5 rounded-full border-0' />

                <div className="flex space-x-4 justify-center">
                    <img alt="" src={user?.photoURL} className="object-cover w-24 h-24 rounded-full shadow" />
                    {/* <div className="flex items-center space-y-1">
                        <span className="text-xl font-bold">{user?.displayName}</span>
                    </div> */}
                </div>

                <div className='text-start'>
                    <label htmlFor="name" className="text-xl font-semibold">Name</label>
                    <input id="name" type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        placeholder="Name" className="w-full focus:outline-none text-black text-center py-1 mt-2 rounded-3xl bg-blue-200 font-bold text-xl" />
                </div>

                <div className="text-start">
                    <label htmlFor="email" className="text-xl font-semibold">Email</label>
                    <input id="email" type="text"
                        defaultValue={
                            user?.email ?
                                user.email
                                :
                                `System did not find your Email`
                        }
                        readOnly
                        placeholder="Email" className="w-full focus:outline-none text-black text-center py-1 mt-2 rounded-3xl bg-blue-200 font-bold text-xl" />
                </div>

                <div className="flex flex-col md:flex-row gap-3 items-center justify-between pb-2">

                    <p className="bg-blue-100 text-blue-900 font-semibold text-2xl px-2.5 py-0.5 rounded">Price: ${price}</p>

                    <p className="bg-blue-100 text-blue-900 font-semibold text-2xl px-2.5 py-0.5 rounded">+</p>

                    <p className="bg-blue-100 text-blue-900 font-semibold text-2xl px-2.5 py-0.5 rounded">Tax: ${tax}</p>

                    <p className="bg-blue-100 text-blue-900 font-semibold text-2xl px-2.5 py-0.5 rounded">=</p>

                    <p className="flex items-center gap-2 bg-blue-100 text-blue-900 font-semibold text-2xl px-2.5 py-0.5 rounded">Total: ${total}</p>


                </div>

                <div className="flex flex-wrap justify-between">
                    <div className="flex justify-between items-center">
                        <Link to={`/courses/${id}`} className="text-white bg-blue-900 hover:bg-blue-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center flex justify-between items-center gap-3"><FaArrowLeft className='text-lg' /> Go Back</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to='/thanks' className="text-white bg-blue-900 hover:bg-blue-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center flex justify-between items-center gap-3">Check Out <FaArrowRight className='text-lg' /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;