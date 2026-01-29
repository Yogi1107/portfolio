import React, {useRef} from 'react';
import linkedin from '../../assets/l.png';
import github from '../../assets/g.png';
import leetcode from '../../assets/leetcode.png';
import emailjs from '@emailjs/browser';
import './contact.css'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5cfieju', 'template_6rd8xll', form.current, {
        publicKey: 'UuMAi2FpUMc0YpVYZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    return (
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Feel free to reach out if you’d like to connect, collaborate, or discuss opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='name'/>
                <input type='email' className='email' placeholder='Your Email' name='from_email'/>
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