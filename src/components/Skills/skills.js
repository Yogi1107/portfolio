import React from 'react';
import python from '../../assets/python.png';
import postgres from '../../assets/postgresql.png';
import react from '../../assets/react.png';
import javascript from '../../assets/javascript.png'
import './skills.css';

export default function Skills() {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills</span>
            <span className='skillDesc'>I build projects using Python for backend logic, PostgreSQL for databases, and React with JavaScript for the frontend.
            My focus is on creating simple, useful applications that work well in real-world scenarios.
            I keep improving my skills by learning and building consistently. </span>
            <div className='skillsBars'>
                <div className='skillBar'>
                    <img src={python} alt='Python' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Python</h2>
                        <p>Use Python to build backend logic, APIs, and data-driven features for applications.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={postgres} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>PostgreSQL</h2>
                        <p>Design and manage relational databases with PostgreSQL for storing and handling application data.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React</h2>
                        <p>Build interactive and responsive user interfaces using React.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={javascript} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>JavaScript</h2>
                        <p>Add dynamic behavior and client-side logic to web applications using JavaScript.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}