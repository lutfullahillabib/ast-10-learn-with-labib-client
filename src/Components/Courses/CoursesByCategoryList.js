import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { allCourses } from '../../Routes/Loader';
import CategoryCourses from './CategoryCourses';

const CoursesByCategoryList = () => {

    const singleCourse = useLoaderData();
    // console.log(singleCourse);

    // const [allCourse, setAllCourse] = useState([]);

    // useEffect(() => {
    //     fetch('https://learn-with-labib-server.vercel.app/courses')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

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

            {/* <div>
                {
                    allCourse.map(single => <CategoryCourses
                        key={single.id}
                        single={single}
                    ></CategoryCourses>)
                }
            </div> */}

        </div>
    );
};

export default CoursesByCategoryList;
