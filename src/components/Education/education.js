import React from "react";
import "./education.css";

export default function Education() {
  return (
    <section id="education">
      <h2 className="eduTitle">Education</h2>
      <p className="eduDesc">
        My academic journey and specialization in Computer Science and AI.
      </p>

      <div className="eduTimeline">
        <div className="eduCard">
          <span className="eduYear">2024 - Present</span>
          <h3>M.Sc. Computer Science</h3>
          <p>Fergusson College, Pune</p>
          <p className="eduInfo">
            Focused on AI, Machine Learning, Data Science, and Advanced Software Engineering.
          </p>
        </div>

        <div className="eduCard">
          <span className="eduYear">2021 - 2024</span>
          <h3>B.Sc. Computer Science</h3>
          <p>MES’ Abasaheb Garware College</p>
          <p className="eduInfo">
            Graduated with <strong>CGPA: 9.5</strong>. Core subjects included DSA, DBMS, OS, and Statistics.
          </p>
        </div>
      </div>
    </section>
  );
}
