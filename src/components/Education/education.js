import React from "react";
import "./education.css";
import SplitText from '../../components/animations/SplitText';

export default function Education() {
  return (
    <section id="education">
      <div className="eduTitle">
        <SplitText
          text="Education"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>
      <p className="eduDesc">
        My academic journey and specialization in Computer Science.
      </p>

      <div className="eduTimeline">
        <div className="eduCard">
          <span className="eduYear">2025 – Present</span>
          <h3>M.Sc. Computer Science</h3>
          <p>Fergusson College, Pune</p>
          <p className="eduInfo">
            Specializing in AI, Machine Learning, and Data Science.
            Relevant coursework: Machine Learning, Deep Learning, Big Data Analytics, Advanced Algorithms, and Software Engineering.
          </p>
        </div>

        <div className="eduCard">
          <span className="eduYear">2022 – 2025</span>
          <h3>B.Sc. Computer Science</h3>
          <p>Sir Parashurambhau College (Autonomous), Pune</p>
          <p className="eduInfo">
            Graduated with <strong>CGPA: 9.5</strong>.
            Relevant coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Statistics, and Web Technologies.
          </p>
        </div>
      </div>
    </section>
  );
}