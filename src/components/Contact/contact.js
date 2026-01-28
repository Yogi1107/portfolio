import React from 'react';
import linkedin from '../../assets/l.png';
import github from '../../assets/g.png';
import leetcode from '../../assets/leetcode.png';
import './contact.css'

export default function Contact() {
    return (
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Feel free to reach out if you’d like to connect, collaborate, or discuss opportunities.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your message'></textarea>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <a href='https://github.com/Yogi1107'><img className='link' src={github} alt='GitHub'/></a>
                    <a href='https://www.linkedin.com/in/yogiraj-bhilare-bb3896253'><img className='link' src={linkedin} alt='LinkedIN'/></a>
                    <a href='https://leetcode.com/u/yogirajbhilare1107/'><img className='link' src={leetcode} alt='Leetcode'/></a>
                </div>
            </form>
        </div>
    )
}