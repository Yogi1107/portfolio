import React from 'react';
import './intro.css';
import bg from '../../assets/profile___.png';
import {Link} from 'react-scroll';
import btnimg from '../../assets/hire_me.png';

export default function Intro() {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Yogiraj</span><br /> Software Developer</span>
                <p className='introPara'>A student exploring AI and data science by building useful, real-world projects in Python.</p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                    <img src={btnimg} alt="Hire Me" className="btnImg" />
                    </button>
                </Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
}