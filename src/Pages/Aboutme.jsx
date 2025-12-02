import React from "react";

const Aboutme = () => {
  return (
    <div>
      <h1 className="section-title">About Me</h1>

      <p className="section-text">
        I’m <strong>Shaik Aman Sayer</strong>, an Electronics and Communication
        Engineering graduate from <strong>JNTUH</strong>, with a strong academic
        background and a deep interest in technology-driven problem solving. I
        focus on building real-world solutions that blend creativity, clarity,
        and efficiency.
      </p>

      <p className="section-text">
        I am currently working at the <strong>Google Operations Center </strong>
        as a <strong>Senior Analyst</strong>, where I support one of Google’s
        key products by helping customers resolve issues with clarity and
        empathy. This has strengthened my communication, technical
        understanding, and user-focused problem-solving abilities.
      </p>

      <p className="section-text">
        Outside of work, I’m passionate about <strong>web development</strong>
        and actively building my skills as an aspiring{" "}
        <strong>Frontend Developer</strong>. I enjoy creating clean, responsive
        interfaces and turning ideas into functional web experiences. I’ve built{" "}
        <strong>20+ GitHub repositories</strong>, solved{" "}
        <strong>200+ LeetCode problems</strong>, and continue sharpening my
        skills in JavaScript, React, and modern UI/UX practices.
      </p>

      <p className="section-text">
        Driven by continuous learning and growth, I aim to work with top tech
        companies, contribute to impactful digital products, and build
        meaningful technology that helps people at scale.
      </p>

      <h2 className="section-title" style={{ marginTop: "50px" }}>
        What I'm Doing
      </h2>

      <div className="doing-grid">
        <div className="doing-card">
          <div className="doing-row">
            <img
              src="/images/images.png"
              alt="Frontend Icon"
              className="doing-icon"
            />
            <div>
              <h3>Frontend Development</h3>
              <p>
                Building clean, modern and responsive web interfaces using React
                and JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="doing-card">
          <div className="doing-row">
            <img
              src="/images/idea-icon.png"
              alt="Problem Solving Icon"
              className="doing-icon"
            />
            <div>
              <h3>Problem Solving (DSA)</h3>
              <p>
                Solving coding problems on LeetCode and strengthening logic +
                algorithm skills.
              </p>
            </div>
          </div>
        </div>

        <div className="doing-card">
          <div className="doing-row">
            <img
              src="/images/Learning.jpg"
              alt="Learning Icon"
              className="doing-icon"
            />
            <div>
              <h3>Learning & Exploring</h3>
              <p>
                Interested in learning new technologies and exploring the latest
                AI features.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: "50px" }}>
        Coding Profiles
      </h2>

      <div className="coding-grid">
        <div className="coding-card">
          <div className="coding-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="coding-icon"
            />
            <h3>LeetCode</h3>
          </div>

          <p>Solved 200+ DSA problems.</p>

          <a
            href="https://leetcode.com/u/Shaik_Aman_Sayer/"
            target="_blank"
            rel="noreferrer"
            className="visit-btn"
          >
            Visit Profile
          </a>
        </div>

        <div className="coding-card">
          <div className="coding-header">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="coding-icon"
            />
            <h3>GitHub</h3>
          </div>

          <p>
            25+ repositories including projects, UI experiments & learning work.
          </p>

          <a
            href="https://github.com/shaikamansayer13"
            target="_blank"
            rel="noreferrer"
            className="visit-btn"
          >
            Visit Profile
          </a>
        </div>
      </div>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <h2 className="section-title" style={{ marginTop: "50px" }}>
        Achievements
      </h2>

      <div className="achievement-list">
        <div className="achievement-item">
          <div className="achievement-icon">💡</div>
          <div>
            <h3 className="achievement-title">
              Recognized Performer - Google Operations Center
            </h3>
            <p className="achievement-desc">
              Appreciated for delivering excellent customer support and
              maintaining consistent performance.
            </p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon">🎓</div>
          <div>
            <h3 className="achievement-title">Academic Excellence - JNTUH</h3>
            <p className="achievement-desc">
              Graduated in Electronics and Communication Engineering with strong
              academic results.
            </p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon">📈</div>
          <div>
            <h3 className="achievement-title">LeetCode Milestone</h3>
            <p className="achievement-desc">
              Solved 200+ DSA problems with continuous learning and improvement.
            </p>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-icon">🧑‍💻</div>
          <div>
            <h3 className="achievement-title">GitHub Contributions</h3>
            <p className="achievement-desc">
              Built 20+ repositories covering frontend projects, problem solving
              and personal experiments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
