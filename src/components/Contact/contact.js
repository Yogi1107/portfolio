import React, { useRef } from 'react';
import linkedin from '../../assets/l.png';
import github from '../../assets/g.png';
import leetcode from '../../assets/leetcode.png';
import emailjs from '@emailjs/browser';
import './contact.css';
import SplitText from '../../components/animations/SplitText';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate(); // ✅ ADD THIS

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5cfieju', 'template_6rd8xll', form.current, {
        publicKey: 'UuMAi2FpUMc0YpVYZ',
      })
      .then(
        () => {
          alert("✅ Thank you for reaching out! Your message has been sent successfully.");

          form.current.reset();

          // ✅ SPA Navigation instead of DOM scroll
          navigate('/');
        },
        (error) => {
          alert("❌ Oops! Something went wrong. Please try again.");
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <div className='contactPageTitle'>
        <SplitText
          text="Contact"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>

      <span className='contactDesc'>
        Feel free to reach out if you’d like to connect, collaborate, or discuss opportunities.
      </span>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='name' required />
        <input type='email' className='email' placeholder='Your Email' name='from_email' required />
        <textarea className='msg' name='message' rows='5' placeholder='Your message' required></textarea>

        <button className='submitBtn' type='submit'>Submit</button>

        <div className='links'>
          <a href='https://github.com/Yogi1107'>
            <img className='link' src={github} alt='GitHub'/>
          </a>
          <a href='https://www.linkedin.com/in/yogiraj-bhilare-bb3896253'>
            <img className='link' src={linkedin} alt='LinkedIN'/>
          </a>
          <a href='https://leetcode.com/u/yogirajbhilare1107/'>
            <img className='link' src={leetcode} alt='Leetcode'/>
          </a>
        </div>
      </form>
    </div>
  );
}