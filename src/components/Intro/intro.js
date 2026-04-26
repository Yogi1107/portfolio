import React from 'react';
import './intro.css';
import bg from '../../assets/profile___.png';
import { Link } from 'react-scroll';

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
              "AI / ML Enthusiast",
              "Data Science Explorer",
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
          I build AI-powered, full-stack Python applications that solve real-world problems —
          from LLM-integrated tools to ML dashboards.
        </p>

        <div className="introButtons">
          <Link to="contact" smooth={true} duration={500}>
            <button className="hireMeBtn">Hire Me</button>
          </Link>
          <a
            href={`${process.env.PUBLIC_URL}/Yogiraj_Bhilare_Resume.pdf`}
            download
            className="resumeBtn"
          >
            Download Resume
          </a>
        </div>

      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}