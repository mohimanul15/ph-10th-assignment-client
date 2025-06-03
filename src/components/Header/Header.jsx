import React from 'react';
import { Link } from 'react-router';
import logomain from '../../assets/logo-main.webp';

const Header = () => {

    const menu = [
        {
            path:'/',
            text:'Home',
        },
        {
            path:'all-visas',
            text:'All Visas',
        },
        {
            path: 'add-visa',
            text:'Add Visa',
        },
        {
            path: 'my-added-visas',
            text: 'My Visas',
        },
        {
            path: 'my-visa-applications',
            text: 'My Applications',
        },
        {
            path: 'login',
            text: 'Login',
        }
    ]

    return (
        <>
            <header className='bg-base-100 shadow-sm'>
                <div className="navbar container max-w-7xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <Link>
                            <img src={logomain} alt="Site Logo" width={120}/>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                menu.map((ele,idk)=>{
                                    return <>
                                        <li key={idk}>
                                            <Link 
                                                to={ele.path} className='text-base uppercase font-medium text-cyan-900 hover:border-b-3 hover:rounded-b-none hover:bg-transparent border-b-blue-500
                                                hover:text-blue-800'>
                                                    {ele.text}
                                            </Link>
                                        </li>
                                    </>         
                                })
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button 
                            className='btn btn-info text-white hover:btn-primary uppercase duration-300 delay-200'>
                                Apply Now
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;