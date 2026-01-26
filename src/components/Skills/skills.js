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
            <span className='skillDesc'>I am passionate for python and AI related techstack. I am passionate for python and AI related techstack. I am passionate for python and AI related techstack. I am passionate for python and AI related techstack. </span>
            <div className='skillsBars'>
                <div className='skillBar'>
                    <img src={python} alt='Python' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Python</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={postgres} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>PostgreSQL</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={react} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={javascript} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>JavaScript</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}