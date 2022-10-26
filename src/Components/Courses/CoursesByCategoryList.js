import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourses from './CategoryCourses';

const CoursesByCategoryList = () => {

    const singleCourse = useLoaderData();
    // console.log(singleCourse[0]);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto items-center '>
            {
                // singleCourse.map(single => console.log(single))
            }

            {
                singleCourse.map(single => <CategoryCourses
                    key={single.id}
                    single={single}
                ></CategoryCourses>)
            }

        </div>
    );
};

export default CoursesByCategoryList;
