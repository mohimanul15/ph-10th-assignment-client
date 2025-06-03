import React from 'react';
import { Link } from 'react-router';
import errorpage from '../../assets/errorpage.png';

const Error404 = () => {
    return (
        <>
            <section className='w-full h-dvh relative'>

                <main
                    className={`grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8`}>
                    <div className="text-center">
                        <div className='flex justify-center w-full'>
                            <img src={errorpage} alt="Error Logo" />
                        </div>

                        <h1
                            className="mt-4 text-5xl font-semibold tracking-tight text-balance text-indigo-100 sm:text-7xl">
                            Page not found!
                        </h1>

                        <p className="mt-6 text-lg font-medium text-pretty text-indigo-200 sm:text-xl/8">Sorry! The page you are looking for is not found or created.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to={'/'}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Home Page</Link>
                        </div>
                    </div>
                </main>

            </section>
        </>
    );
};

export default Error404;