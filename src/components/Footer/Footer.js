import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarMenu } from '../../assets/navLinks';

const Footer = () => {
    return (
        <>
            <div class="" style={{ backgroundColor: "#3d393961" }}>
                <div>
                    <div class="container mx-auto px-6 lg:px-20 py-12">
                        <div class="lg:flex">
                            <div class="w-full lg:w-2/3">
                                <div class="lg:flex">
                                    <div class="w-full mb-12 lg:mb-0 lg:w-1/2">
                                        <h2 class="font-bold text-xl text-gray-100 mb-4">N_Ah</h2>
                                        <p class="text-gray-400">
                                            Md Numan Ahmed a Full Stack Developer form a small village of West Bengal, INDIA. <br />
                                            I write Front-End | Back-End | Mobile App etc.
                                        </p>

                                    </div>
                                    <div class="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                        <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 className="font-bold text-gray-100 mb-4 text-lg">Links</h2>
                                            <ul class="text-gray-500 text-sm">
                                                {
                                                    navBarMenu.map(({ label, link }, index) => (
                                                        <li class="pt-1 pb-2 font-bold">
                                                            <a class="">
                                                                <NavLink key={index}
                                                                    exact to={link}
                                                                    activeStyle={{ color: `rgba(219, 39, 119` }}
                                                                // onClick={() => null}
                                                                >
                                                                    {label}
                                                                </NavLink>
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 class="font-bold text-gray-100 mb-4"> Skills </h2>
                                            <ul class="text-gray-500 text-sm">
                                                <li class="pt-1 pb-2">Front-End Development</li>
                                                <li class="pt-1 pb-2">Back-End Development</li>
                                                <li class="pt-1 pb-2">Hybrid-App Development</li>
                                                <li class="pt-1 pb-2">PWA Development</li>
                                                <li class="pt-1 pb-2">API Development</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/3">
                                <h2 class=" font-bold text-gray-100 mb-4">
                                    Newsletter
                                </h2>
                                <div class="text-gray-300 mb-8">
                                    Subscribe my weely Newsletter to get updates about Tech.
                                </div>
                                <div class="flex">
                                    <input type="text" class="rounded-l px-2 focus:outline-none" placeholder="numan@gmail.com" />
                                    <button class="text-gray-200 rounded-r hover:bg-blue-500 px-4 py-2 focus:outline-none"
                                        style={{ backgroundColor: "#dc0900" }}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div style={{ backgroundColor: "#191717ba" }}>
                    <div class="container mx-auto px-6 lg:px-20 py-6">
                        <div class="flex justify-center text-gray-300 mb-1">
                            © 2022 &nbsp; <span class="font-bold"> N_Ah </span> &nbsp;
                            All rights reserved.
                        </div>
                        <div class="flex font-light justify-center text-gray-500 text-sm">
                            <p>Designed & Developed with 💖 by <span class="font-bold">N_Ah</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;