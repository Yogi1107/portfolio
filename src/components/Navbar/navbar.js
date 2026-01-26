import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact_button from '../../assets/contact.png';
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
                <Link activeClass='active' className="desktopMenuListItem" to="codingStats" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Coding Stats
                </Link>
            </div>
            <button 
                className="imgButton"
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                >
                <img src={contact_button} alt="Contact" className="desktopMenuImgBtn" />
            </button>


            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' className="listItem" to="intro" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>
                    Home
                </Link>
                <Link activeClass='active' className="listItem" to="skills" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Skills
                </Link>
                <Link activeClass='active' className="listItem" to="education" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Education
                </Link>
                <Link activeClass='active' className="listItem" to="project" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Projects
                </Link>
                <Link activeClass='active' className="listItem" to="codingStats" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Coding Stats
                </Link>
                <Link activeClass='active' className="listItem" to="contact" spy={true} offset={-50} smooth={true} duration={500} onClick={()=>setShowMenu(false)}>
                    Contact
                </Link>
            </div>

        </nav>
    );
}
