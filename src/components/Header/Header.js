import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarMenu } from '../../assets/navLinks';
import useToggleNav from '../../hooks/useToggleNav';
import Logo from '../SharedComponents/ActiveStatusGreenDot/Logo';
import './header.scss';

const Header = () => {
    const { toggleMobileMenu, setToggleMobileMenu } = useToggleNav();

    return (
        <nav className="site-header">
            <div className="header-inner">
                <div className="header-logo">
                    <Logo />
                </div>

                <button
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                    onClick={() => setToggleMobileMenu(prev => !prev)}
                >
                    <span className={`hamburger ${toggleMobileMenu ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className={`header-nav-wrap ${toggleMobileMenu ? 'is-open' : ''}`}>
                    <ul className="header-nav">
                        {navBarMenu.map(({ label, link }, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'nav-link--active' : ''}`
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
                        className="cv-btn"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
