import React from 'react';
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa";


const CategoryCourses = ({ single }) => {

    // console.log(single);
    const { id, author, category, course_name, image, price, rating, description, sub_title, requirements } = single;

    return (
        <div className='mx-auto my-10'>

            <div className="w-full max-w-sm  rounded-lg shadow-md bg-blue-700 border-0 h-[28rem]">
                <Link to={`/courses/${id}`}>
                    <img className="p-8 rounded-t-lg h-56 w-full" src={image} alt="Course-Pic" />
                </Link>
                <div className="px-5 pb-5 flex justify-between flex-col h-52">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{course_name}</h5>
                    <div className="flex items-center justify-between mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1"> <FaStar className='text-yellow-400'></FaStar> {rating}</span>
                        <p className="bg-blue-100 text-blue-900 font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1">{author}</p>
                        <p className="bg-blue-100 text-blue-900 font-semibold mr-2 px-2.5 py-0.5 rounded ml-2 flex items-center gap-1">{category}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-white">${price}</span>
                        <Link to={`/courses/${id}`} className="text-white bg-blue-900 hover:bg-blue-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center ">Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryCourses;
