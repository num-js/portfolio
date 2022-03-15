import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ACADEMICS, CONTACT_ME, EXPERIENCES, INDEX, PROJECTS, SKILLS } from '../../helpers/routesURL';
import useToggleNav from '../../hooks/useToggleNav';

const Header = () => {

    const { toggleMobileMenu, setToggleMobileMenu } = useToggleNav();

    const navBarMenu = [
        {
            label: 'Home',
            link: INDEX
        },
        {
            label: 'Experiences',
            link: EXPERIENCES
        },
        {
            label: 'Skills',
            link: SKILLS
        },
        {
            label: 'Projects',
            link: PROJECTS
        },
        {
            label: 'Academics',
            link: ACADEMICS
        },
        // {
        //     label: 'Contact Me',
        //     link: CONTACT_ME
        // },
    ];

    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8  10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                    <span class="font-semibold text-xl tracking-tight">&lt;N_Ah /&gt;</span>
                </div>

                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:border-pink-600 hover:text-pink-600"
                        onClick={() => setToggleMobileMenu(prev => !prev)}
                    >
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${toggleMobileMenu ? '' : 'hidden'}`}>
                    <div class="text-sm lg:flex-grow">
                        {
                            navBarMenu.map(({ label, link }, index) => (
                                <a class="nav-menu block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl">
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
                            class="inline-block leading-none border rounded text-white border-pink-600 hover:border-white hover:text-teal-500 hover:bg-black mt-4 lg:mt-0" style={{ borderRadius: '2px' }}
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