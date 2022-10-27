import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';


const AllCategories = () => {

    const categories = useLoaderData();
    // console.log(categories);

    return (

        <div>

            <header className='bg-blue-500 my-5  sticky top-[6rem]'>
                <NavLink to={`/categories`}>
                    <h2 className=' m-0 py-3 text-white hover:text-black text-center  font-semibold text-3xl'>
                        All Courses
                    </h2>
                </NavLink>
            </header>

            <div className='grid grid-cols-1 lg:grid-cols-4 w-11/12 mx-auto pt-6'>
                <aside className='col-span-1 bg-blue-400 py-10 rounded h-[33rem] lg:sticky top-[15rem]'>
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
        </div>
    );
};

export default AllCategories;
