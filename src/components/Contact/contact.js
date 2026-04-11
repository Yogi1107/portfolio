import React, { useRef, useState } from 'react';
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

function Toast({ message, type, visible }) {
  return (
    <div className={`toast toast--${type} ${visible ? 'toast--visible' : ''}`}>
      <span className='toastIcon'>{type === 'success' ? '✓' : '✕'}</span>
      {message}
    </div>
  );
}

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const [toast, setToast] = useState({ message: '', type: 'success', visible: false });

  const showToast = (message, type = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5cfieju', 'template_6rd8xll', form.current, {
        publicKey: 'UuMAi2FpUMc0YpVYZ',
      })
      .then(
        () => {
          showToast("Message sent! I'll get back to you soon.", 'success');
          form.current.reset();
          setTimeout(() => navigate('/'), 3500);
        },
        (error) => {
          showToast('Something went wrong. Please try again.', 'error');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} />

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
        Feel free to reach out if you'd like to connect, collaborate, or discuss opportunities.
      </span>

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='name' required />
        <input type='email' className='email' placeholder='Your Email' name='from_email' required />
        <textarea className='msg' name='message' rows='5' placeholder='Your message' required></textarea>

        <button className='submitBtn' type='submit'>Submit</button>

        <div className='links'>
          <a href='https://github.com/Yogi1107'>
            <img className='link' src={github} alt='GitHub' />
          </a>
          <a href='https://www.linkedin.com/in/yogiraj-bhilare-bb3896253'>
            <img className='link' src={linkedin} alt='LinkedIN' />
          </a>
          <a href='https://leetcode.com/u/yogirajbhilare1107/'>
            <img className='link' src={leetcode} alt='Leetcode' />
          </a>
        </div>
      </form>
    </div>
  );
}