import React from "react";
import "./codingstats.css";
import SplitText from "./../animations/SplitText.js";

export default function CodingStats() {
  const githubUsername = "Yogi1107";
  const leetcodeUsername = "yogirajbhilare1107";
  const hackerrankUsername = "yogirajbhilare11";

  return (
    <section id="codingStats">
      <div className="statsTitle">
        <SplitText
          text="Coding Stats"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>
      <p className="statsDesc">
        Practicing coding to improve logic and problem-solving.
      </p>

      <div className="statsGrid">
        {/* GitHub Stats */}
        <div className="statCard">
          <h3>GitHub Stats</h3>
          <img
            src={`https://github.pumbas.net/api/contributions/Yogi1107`}
            alt="GitHub Stats"
          />
        </div>

        {/* LeetCode Stats */}
        <div className="statCard">
          <h3>LeetCode Stats</h3>
          <img
            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark`}
            alt="LeetCode Stats"
          />
        </div>
      </div>

      {/* HackerRank Stats */}
      <div className="hackerrankBox">
        <h3>HackerRank Stats</h3>
        <img
          src={`https://hackerrank-stats.vercel.app/api?username=${hackerrankUsername}`}
          alt="HackerRank Stats"
        />
      </div>
    </section>
  );
}
