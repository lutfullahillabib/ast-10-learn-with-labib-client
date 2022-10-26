import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';

const AllCategories = () => {

    const categories = useLoaderData();
    // console.log(categories);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 w-11/12 mx-auto pt-6'>
            <aside className='col-span-1 bg-blue-400 py-10 rounded'>
                {
                    // categories.map(singleCategory => console.log(singleCategory))
                }
                {
                    categories.map(singleCategory => <LeftSideBar
                        key={singleCategory.id}
                        singleCategory={singleCategory}
                    ></LeftSideBar>)
                }
            </aside>

            <main className='col-span-3  rounded'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AllCategories;
