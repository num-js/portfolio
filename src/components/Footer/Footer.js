import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import socialMediaIconURL from '../../assets/data/socialMediaData';
import { navBarMenu } from '../../assets/navLinks';
import scrollToPosition from '../../helpers/scrollToPosition';
import Logo from '../SharedComponents/ActiveStatusGreenDot/Logo';

const Footer = () => {
    return (
        <>
            <div className=""
                style={{ backgroundColor: "#3d393961", }}
            >
                <div style={{ background: `url("../backgrounds/bg-circles.svg")`, backgroundPositionX: "-157%", backgroundPositionY: "6%" }}>
                    <div className="container px-3 py-12 mx-auto lg:px-20">
                        <div className="lg:flex">
                            <div className="w-full lg:w-2/3">
                                <div className="lg:flex">
                                    <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                                        <Logo />
                                        <p className="text-gray-400">
                                            Md Numan Ahmed a Full Stack Developer form a small village of West Bengal, INDIA. <br />
                                            I write Front-End | Back-End | Mobile Apps | REST APIs etc.
                                        </p>
                                        <div className="flex mt-6 justify-evenly">
                                            {
                                                socialMediaIconURL.map(({ icon, link }) => (

                                                    <Link to={{ pathname: link }} target="_blank">
                                                        <div
                                                            className="footer-social-img"
                                                            style={{ backgroundImage: `url(${icon})` }}
                                                        />
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                        <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 className="mb-4 text-lg font-bold text-gray-100">Links</h2>
                                            <ul className="text-sm text-gray-300">
                                                {
                                                    navBarMenu.map(({ label, link }, index) => (
                                                        <li className="pt-1 pb-2 font-bold">
                                                            <a className="">
                                                                <NavLink key={index}
                                                                    exact to={link}
                                                                    activeStyle={{ color: `rgba(219, 39, 119` }}
                                                                    onClick={() => scrollToPosition()}
                                                                >
                                                                    {label}
                                                                </NavLink>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 className="mb-4 font-bold text-gray-100"> Skills </h2>
                                            <ul className="text-sm text-gray-300">
                                                <li className="pt-1 pb-2">Front-End Development</li>
                                                <li className="pt-1 pb-2">Back-End Development</li>
                                                <li className="pt-1 pb-2">Hybrid-App Development</li>
                                                <li className="pt-1 pb-2">PWA Development</li>
                                                <li className="pt-1 pb-2">API Development</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <h2 className="mb-4 font-bold text-gray-100 ">
                                    Newsletter
                                </h2>
                                <div className="mb-8 text-gray-300">
                                    Subscribe my weely Newsletter to get updates about Tech.
                                </div>
                                <div className="flex">
                                    <input type="text" className="px-2 rounded-l focus:outline-none" placeholder="numan@gmail.com" />
                                    <button className="px-4 py-2 text-gray-200 rounded-r hover:bg-blue-500 focus:outline-none"
                                        style={{ backgroundColor: "#dc0900" }}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div style={{ backgroundColor: "#191717ba" }}>
                    <div className="container px-6 py-6 mx-auto lg:px-20">
                        <div className="flex justify-center mb-1 text-gray-300">
                            © 2022 &nbsp; <span> <Logo icon={false} animation={false} txtSize={16} /> </span> &nbsp;
                            All rights reserved.
                        </div>
                        <div className="flex justify-center text-sm font-light text-gray-500">
                            Designed & Developed with ❤️ by  &nbsp; <span> <Logo icon={false} animation={true} txtSize={16} /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;