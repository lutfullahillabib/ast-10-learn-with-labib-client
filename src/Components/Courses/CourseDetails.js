import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaLock, FaStar } from "react-icons/fa";

import ReactToPdf from "react-to-pdf";


const CourseDetails = () => {


    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        // format: [11.25, 7.50]
        format: [20, 20]
    };

    const singleCourse = useLoaderData();
    console.log(singleCourse);

    const { id, author, category, course_name, image, price, rating, description, sub_title, requirements } = singleCourse;

    return (

        <div className='flex justify-center items-center' ref={ref}>

            <div className="py-10 mx-10 md:px-36 lg:px-16" >

                <div className=" w-full lg:max-w-full flex flex-col lg:flex-row gap-5 items-center">

                    <div className="h-48 lg:w-96 flex-none rounded text-center overflow-hidden" title={category}>
                        <img src={image} alt="NoImg" className='h-full w-full rounded' />
                    </div>

                    <div className="bg-blue-600 rounded py-4 px-9 flex flex-col justify-between leading-normal">
                        <div className="mb-8">

                            <p className="flex my-3 justify-between">
                                <Link to='/checkout' className='flex gap-3 items-center text-white px-3 py-2 bg-blue-900 rounded-full hover:bg-blue-400 hover:text-black font-semibold'><FaLock />Get Premium Access</Link>

                                <ReactToPdf targetRef={ref} filename={`Learn-With-Labib-${id}-${category}.pdf`} options={options} x={0.5} y={0.5} scale={0.8}>
                                    {({ toPdf }) => (
                                        <button onClick={toPdf} className='text-white hover:text-black'>
                                            <FaDownload className='text-3xl' />
                                        </button>
                                    )}
                                </ReactToPdf>

                            </p>

                            <div className="text-black font-bold text-2xl mb-2">{course_name}</div>
                            <p className="text-white text-lg font-medium">{sub_title}</p>

                        </div>

                        <div>
                            <p className='text-justify mb-8'><span className='font-bold'>Description:</span> {description}</p>
                        </div>

                        <div className='text-justify'>
                            <p className='font-bold'>Requirements:</p>
                            <ul className='text-justify mb-8 pl-5'>
                                {
                                    requirements.map((req, idx) =>
                                        <li
                                            key={idx}
                                            className='list-disc font-medium'
                                        >
                                            {req}
                                        </li>)
                                }
                            </ul>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between pb-2">

                            <p className="text-3xl font-bold text-white">${price}</p>
                            <p className="bg-blue-100 text-blue-900 font-semibold text-lg px-2.5 py-0.5 rounded">{author}</p>
                            <p className="flex items-center gap-2 bg-blue-100 text-blue-900 font-semibold text-lg px-2.5 py-0.5 rounded"> <FaStar className='text-yellow-400' />{rating}</p>
                            <p className="bg-blue-100 text-blue-900 font-semibold text-lg px-2.5 py-0.5 rounded">{category}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default CourseDetails;