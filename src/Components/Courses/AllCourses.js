import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourses from './CategoryCourses';

const AllCourses = () => {

    const allCourses = useLoaderData();
    console.log(allCourses);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto items-center '>
            {
                allCourses.map(single => <CategoryCourses
                    key={single.id}
                    single={single}
                ></CategoryCourses>)
            }
        </div>
    );
};

export default AllCourses;