import React from "react";
import "./codingstats.css";

export default function CodingStats() {
  const githubUsername = "Yogi1107";
  const leetcodeUsername = "yogirajbhilare1107";

  return (
    <section id="codingStats">
      <h2 className="statsTitle">Coding Activity</h2>
      <p className="statsDesc">
        My consistency and progress across GitHub and LeetCode.
      </p>

      <div className="statsGrid">
        {/* GitHub Stats */}
        <div className="statCard">
          <h3>GitHub Stats</h3>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight`}
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

      {/* Contribution Graph
      <div className="contributionBox">
        <h3>GitHub Contributions</h3>
        <img
          src={`https://github.com/users/${githubUsername}/contributions`}
          alt="GitHub Contributions"
        />
      </div> */}
    </section>
  );
}
