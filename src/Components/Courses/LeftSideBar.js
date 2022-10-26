import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideBar = ({ singleCategory }) => {

    // console.log(singleCategory);

    const { id, category } = singleCategory;

    return (
        <div className='w-1/2 mx-auto'>
            <div className='text-start w-3/4 lg:w-5/6 mx-auto font-semibold text-xl py-1 '>
                <NavLink to={`/categories/${category}`}>
                    <h2 className=' m-0 py-2 text-black hover:text-white'>
                        <span className='pr-1'>{id}. </span>
                        {category}
                    </h2>
                </NavLink>
            </div>
        </div>
    );
};

export default LeftSideBar;
