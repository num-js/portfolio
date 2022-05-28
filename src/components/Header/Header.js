import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navBarMenu } from '../../assets/navLinks';
import useToggleNav from '../../hooks/useToggleNav';
import Logo from '../SharedComponents/ActiveStatusGreenDot/Logo';

const Header = () => {

    const { toggleMobileMenu, setToggleMobileMenu } = useToggleNav();

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
                <div className="flex items-center flex-shrink-0 mr-6 text-white">
                    {/* <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8  10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg> */}

                    <Logo />

                    {/* <span className="text-xl font-semibold tracking-tight">&lt;N_Ah /&gt;</span> */}

                    
                </div>

                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 text-white border border-white rounded hover:border-pink-600 hover:text-pink-600"
                        onClick={() => setToggleMobileMenu(prev => !prev)}
                    >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${toggleMobileMenu ? '' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow">
                        {
                            navBarMenu.map(({ label, link }, index) => (
                                <a key={index} className="block mt-4 mr-4 text-xl text-white nav-menu lg:inline-block lg:mt-0 hover:text-gray-400">
                                    <NavLink key={index}
                                        exact to={link}
                                        activeStyle={{ color: `rgba(219, 39, 119` }}
                                        onClick={() => setToggleMobileMenu(false)}
                                    >
                                        {label}
                                    </NavLink>
                                </a>
                            ))
                        }
                    </div>
                    <div>
                        <a
                            download
                            href="../assets/resume/Resume-Numan-frontend.pdf"
                            className="inline-block mt-4 leading-none text-white border border-pink-600 rounded hover:border-white hover:text-teal-500 hover:bg-black lg:mt-0" style={{ borderRadius: '2px' }}
                        >
                            <div id="download-cv-btn"></div>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;