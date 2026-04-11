import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu__.png';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />

            <div className="desktopMenu">
                <Link activeClass='active' className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-50} duration={500}>
                    Home
                </Link>
                <Link activeClass='active' className="desktopMenuListItem" to="skills" spy={true} offset={-50} smooth={true} duration={500}>
                    Skills
                </Link>
                <Link activeClass='active' className="desktopMenuListItem" to="education" spy={true} offset={-50} smooth={true} duration={500}>
                    Education
                </Link>
                <Link activeClass='active' className="desktopMenuListItem" to="project" spy={true} offset={-50} smooth={true} duration={500}>
                    Projects
                </Link>
                <Link activeClass='active' className="desktopMenuListItem" to="codingStats" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Coding Stats
                </Link>
            </div>

            <div className="navActions">
                <a
                    href="/Yogiraj_Bhilare_Resume.pdf"
                    download
                    className="resumeNavBtn"
                >
                    Resume
                </a>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="contactNavBtn"
                >
                    Contact
                </Link>
            </div>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' className="listItem" to="intro" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>
                    Home
                </Link>
                <Link activeClass='active' className="listItem" to="skills" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Skills
                </Link>
                <Link activeClass='active' className="listItem" to="education" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Education
                </Link>
                <Link activeClass='active' className="listItem" to="project" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Projects
                </Link>
                <Link activeClass='active' className="listItem" to="codingStats" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Coding Stats
                </Link>
                <Link activeClass='active' className="listItem" to="contact" spy={true} offset={-50} smooth={true} duration={500} onClick={() => setShowMenu(false)}>
                    Contact
                </Link>
                <a
                    href="/Yogiraj-Bhilare-Resume.pdf"
                    download
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                    style={{ textDecoration: 'none', color: '#007bff' }}
                >
                    Download Resume
                </a>
            </div>
        </nav>
    );
}