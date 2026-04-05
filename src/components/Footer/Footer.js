import React from 'react';
import { NavLink } from 'react-router-dom';
import socialMediaIconURL from '../../assets/data/socialMediaData';
import { navBarMenu } from '../../assets/navLinks';
import Logo from '../SharedComponents/ActiveStatusGreenDot/Logo';
import { getCurrentYear } from '../../helpers/getDate';

const Footer = () => {
    return (
        <>
            <div className="flex justify-end mr-20">
                <img src="../images/plant-blue.svg" />
            </div>
            <div className="footer-surface">
                <div style={{ background: `url("../backgrounds/bg-circles.svg")`, backgroundPositionX: "-157%", backgroundPositionY: "6%" }}>
                    <div className="container px-3 py-12 mx-auto lg:px-20">
                        <div className="lg:flex">
                            <div className="w-full lg:w-2/3">
                                <div className="lg:flex">
                                    <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                                        <Logo />
                                        <p className="text-white/60">
                                            Md Numan Ahmed a Full Stack Developer form a small village of West Bengal, INDIA. <br />
                                            I write Front-End | Back-End | Mobile Apps | REST APIs etc.
                                        </p>
                                        <div className="flex mt-6 justify-evenly">
                                            {
                                                socialMediaIconURL.map(({ icon, link }, index) => (
                                                    <a key={index} href={link} target="_blank" rel="noreferrer">
                                                        <div
                                                            className="footer-social-img"
                                                            style={{ backgroundImage: `url(${icon})` }}
                                                        />
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                        <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 className="mb-4 text-lg font-bold text-white">Links</h2>
                                            <ul className="text-sm text-white/70">
                                                {
                                                    navBarMenu.map(({ label, link }, index) => (
                                                        <li key={index} className="pt-1 pb-2 font-bold">
                                                            <NavLink
                                                                key={index}
                                                                to={link}
                                                                style={({ isActive }) => isActive ? { color: 'var(--color-primary)' } : {}}
                                                            >
                                                                {label}
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                            <h2 className="mb-4 font-bold text-white"> Skills </h2>
                                            <ul className="text-sm text-white/70">
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
                                <h2 className="mb-4 font-bold text-white">
                                    Newsletter
                                </h2>
                                <div className="mb-8 text-white/70">
                                    Subscribe my weely Newsletter to get updates about Tech.
                                </div>
                                <div className="flex">
                                    <input type="text" className="px-2 rounded-l focus:outline-none border border-white/10 text-white placeholder:text-white/40 bg-[var(--color-surface-card)]" placeholder="numan@gmail.com" />
                                    <button className="px-4 py-2 text-white rounded-r focus:outline-none bg-primary hover:brightness-110 transition-all border border-primary">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="footer-bottom">
                    <div className="container px-6 py-6 mx-auto lg:px-20">
                        <div className="flex justify-center mb-1 font-serif text-white/65">
                            © 2020 - {getCurrentYear()}  &nbsp; <span> <Logo icon={false} animation={false} txtSize={16} /> </span> &nbsp;
                            All rights reserved.
                        </div>
                        <div className="flex justify-center font-mono text-sm font-light text-white/65">
                            Designed & Developed with
                            <img alt="numan ahmed" src="../images/num_heart.gif" width="20px" />
                            by  &nbsp; <span> <Logo icon={false} animation={true} txtSize={16} /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
