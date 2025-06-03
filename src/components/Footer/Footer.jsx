import React from 'react';
import logomain from '../../assets/logo-main.webp';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <footer className='bg-base-200'>
                <section className="max-w-7xl mx-auto footer sm:footer-horizontal text-base-content p-10">
                    <aside>
                        <div className='py-3'>
                            <Link to={'/'}>
                                <img src={logomain} alt="footer logo"/>
                            </Link>
                        </div>
                        
                        <p>
                            Visa GURU
                            <br />
                            Providing reliable visa service since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </section>
            </footer>
        </>
    );
};

export default Footer;