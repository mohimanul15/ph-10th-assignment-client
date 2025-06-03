import React from 'react';
import { Link } from 'react-router';
import errorpage from '../../assets/errorpage.png';

const Error404 = () => {
    return (
        <>
            <section className='w-full relative bg-gradient-to-br from-gray-900 to-indigo-900'>

                <div className="fixed inset-0 overflow-hidden z-0">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500/20 blur-xl floating"></div>
                    <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/20 blur-xl floating-2"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full bg-pink-500/20 blur-xl floating-3"></div>
                </div>

                <main
                    className={`grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 relative z-10`}>
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