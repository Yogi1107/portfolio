import React from 'react';
import './intro.css';
import bg from '../../assets/profile___.png';
import { Link } from 'react-scroll';
import btnimg from '../../assets/hire_me.png';

import SplitText from "../../components/animations/SplitText";
import RotatingText from "../../components/animations/RotatingText";

export default function Intro() { 
  return (
    <section id="intro">
      <div className="introContent">

        <SplitText
          text="Hello,"
          className="hello"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        <SplitText
          text="I'm Yogiraj"
          className="introName"
          delay={60}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        {/* ROTATING TEXT */}
        <div className="rotatingRole">
            <RotatingText
                texts={[
                "Full-Stack Python Developer",
                "AI / ML Beginner",
                "Data Science Enthusiast",
                "Creative Problem Solver"
                ]}
                mainClassName="rotatingText"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
            />
        </div>

        <p className="introPara">
          A student exploring AI and data science by building useful, real-world projects in Python.
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnimg} alt="Hire Me" className="btnImg" />
          </button>
        </Link>

      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}