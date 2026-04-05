import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarMenu } from '../../assets/navLinks';
import useToggleNav from '../../hooks/useToggleNav';
import Logo from '../SharedComponents/ActiveStatusGreenDot/Logo';

const navLinkBase =
    'relative text-[0.95rem] font-normal text-white/75 tracking-wide py-1 no-underline transition-colors duration-200 ' +
    'after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:rounded-sm after:bg-primary after:transition-all after:duration-200 ' +
    'hover:text-white hover:after:w-full ' +
    'max-md:block max-md:w-full max-md:border-b max-md:border-white/[0.06] max-md:py-2.5 max-md:text-base';

const navLinkActive = 'text-primary font-medium after:w-full';

const Header = () => {
    const { toggleMobileMenu, setToggleMobileMenu } = useToggleNav();

    return (
        <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.06] bg-header-bar backdrop-blur-xl">
            <div className="mx-auto flex max-w-content items-center justify-between px-10 py-3.5 max-lg:px-6 max-md:flex-wrap max-md:px-5 max-md:py-3">
                <div className="shrink-0">
                    <Logo />
                </div>

                <button
                    type="button"
                    className="hidden cursor-pointer border-none bg-transparent p-1 max-md:flex max-md:items-center max-md:justify-center"
                    aria-label="Toggle menu"
                    aria-expanded={toggleMobileMenu}
                    onClick={() => setToggleMobileMenu((prev) => !prev)}
                >
                    <span className="flex w-[22px] flex-col gap-[5px]">
                        <span
                            className={`block h-0.5 rounded-sm bg-white/80 transition-all duration-200 origin-center ${
                                toggleMobileMenu ? 'translate-y-[7px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`block h-0.5 rounded-sm bg-white/80 transition-all duration-200 ${
                                toggleMobileMenu ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block h-0.5 rounded-sm bg-white/80 transition-all duration-200 origin-center ${
                                toggleMobileMenu ? '-translate-y-[7px] -rotate-45' : ''
                            }`}
                        />
                    </span>
                </button>

                <div
                    className={`flex items-center gap-9 max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:py-3 max-md:pb-4 ${
                        toggleMobileMenu ? 'max-md:flex' : 'max-md:hidden'
                    }`}
                >
                    <ul className="m-0 flex list-none items-center gap-7 p-0 max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {navBarMenu.map(({ label, link }, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        `${navLinkBase} ${isActive ? navLinkActive : ''}`
                                    }
                                    onClick={() => setToggleMobileMenu(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <a
                        download
                        href="../assets/resume/Resume-Numan-frontend.pdf"
                        className="inline-flex shrink-0 items-center justify-center rounded-md border border-white/70 bg-transparent px-5 py-1.5 text-[0.88rem] font-medium tracking-wide text-white no-underline transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_16px_rgba(0,212,200,0.25)] max-md:mt-3.5 max-md:self-start"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
