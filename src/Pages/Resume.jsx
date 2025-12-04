import React from "react";

const Resume = () => {
  return (
    <div>
      <h1 className="section-title">Resume</h1>

      <div className="resume-section">
        <div className="resume-icon">🎓</div>
        <h2 className="resume-heading">Education</h2>
      </div>

      <div className="resume-timeline">
        <div className="resume-item">
          <div className="timeline-dot"></div>
          <div>
            <h3 className="resume-item-title">
              B.Tech in Electronics & Communication Engineering — JNTUH
            </h3>
            <p className="resume-year">2019 – 2023</p>
            <p className="resume-desc">
              Graduated with a strong academic performance from Jawaharlal Nehru
              Technological University Hyderabad. <b>CGPA: 7.8</b>
            </p>
          </div>
        </div>

        <div className="resume-item">
          <div className="timeline-dot"></div>
          <div>
            <h3 className="resume-item-title">Intermediate — MPC</h3>
            <p className="resume-year">2017 – 2019</p>
            <p className="resume-desc">
              Completed Intermediate in Mathematics, Physics, and Chemistry with
              excellent academic results. <b> Percentage: 93.1%</b>
            </p>
          </div>
        </div>

        <div className="resume-item">
          <div className="timeline-dot"></div>
          <div>
            <h3 className="resume-item-title">
              SSC — Secondary School Certificate
            </h3>
            <p className="resume-year">2016 – 2017</p>
            <p className="resume-desc">
              Successfully completed SSC with a strong academic foundation.
              <b> CGPA: 9.5</b>
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- EXPERIENCE ---------------- */}
      <div className="resume-section" style={{ marginTop: "40px" }}>
        <div className="resume-icon">💼</div>
        <h2 className="resume-heading">Experience</h2>
      </div>

      <div className="resume-timeline">
        <div className="resume-item">
          <div className="timeline-dot"></div>
          <div>
            <h3 className="resume-item-title">
              Senior Analyst — Google Operations Center
            </h3>
            <p className="resume-year">2023 – Present</p>
            <p className="resume-desc">
              Working on one of Google's product workflows, ensuring accurate
              user validation, maintaining high-quality review standards, and
              consistently meeting performance metrics such as quality,
              efficiency, and user satisfaction. Developed strong product
              expertise, communication skills, and the ability to make precise
              decisions in time-sensitive scenarios.
            </p>
          </div>
        </div>

        <div className="resume-item">
          <div className="timeline-dot"></div>
          <div>
            <h3 className="resume-item-title">
              Frontend Developer — Personal & Freelance Projects
            </h3>

            <p className="resume-desc">
              Designing and developing responsive, user-friendly web interfaces
              using React, JavaScript, and modern UI/UX practices.
            </p>
          </div>
        </div>
      </div>

       <div className="download-container">
       <a href="/Resume_Aman.pdf" className="download-btn" download>
       ⬇️ Download My Resume
       </a>
       </div>
    </div>
  );
};

export default Resume;

