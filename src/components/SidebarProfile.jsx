import React from "react";

export default function SidebarProfile() {
  return (
    <>
      {/* ============ DESKTOP SIDEBAR ONLY ============ */}
      <div className="sidebar-wrapper">
        <div className="sidebar-card">
          <div className="profile-pic">
            <img src="/aman.jpg" alt="profile" />
          </div>

          <h2 className="name">Shaik Aman Sayer</h2>
          <div className="role-badge">Senior Analyst</div>

          <hr className="divider" />

          <div className="info-section">
            <div className="info-item">
              <div className="icon-box">📧</div>
              <div className="info-text-block">
                <p className="label">EMAIL</p>
                <p className="text">amansayer1313@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">📱</div>
              <div className="info-text-block">
                <p className="label">PHONE</p>
                <p className="text">+91 6309130028</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">📅</div>
              <div className="info-text-block">
                <p className="label">BIRTHDAY</p>
                <p className="text">Nov 13, 2001</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">📍</div>
              <div className="info-text-block">
                <p className="label">LOCATION</p>
                <p className="text">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-row">
            <a
              href="https://www.linkedin.com/in/shaik-aman-sayer-503881250/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>

            <a
              href="https://github.com/shaikamansayer13"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="devicon-github-original"></i>
            </a>

            <a
              href="https://leetcode.com/u/Shaik_Aman_Sayer/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="devicon-leetcode-plain"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
