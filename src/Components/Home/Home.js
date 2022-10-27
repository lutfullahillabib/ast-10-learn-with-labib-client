import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <section
                className="relative bg-[url(https://i.ibb.co/KK6gphg/97639-coding.gif)] bg-cover bg-center bg-no-repeat "
            >
                <div
                    className="absolute inset-0 bg-blue-500/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-blue-500/95 sm:to-blue-500/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8 min-h-screen"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Learn your Favorite Programming Language with

                            <strong className="block font-extrabold text-rose-700 text-white curly my-2">
                                LEARN-WITH-LABIB.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-semibold">
                            Welcome.
                            <br />
                            This is one of the best platform to build & sharp your skills of Programming Languages.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to='/categories'
                                className="block w-full rounded bg-blue-100 px-12 py-3 font-bold text-blue-800 shadow hover:bg-blue-800 hover:text-white focus:outline-none active:bg-red-500 sm:w-auto"
                            >
                                Courses
                            </Link>

                            <Link
                                to='/blog'
                                className="block w-full rounded bg-blue-800 px-12 py-3 font-bold text-white shadow hover:bg-blue-100 hover:text-blue-800 focus:outline-none active:bg-red-500 active:text-white sm:w-auto"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;