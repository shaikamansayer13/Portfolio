import Header from "./Pages/Header";
import SidebarProfile from "./components/SidebarProfile";
import About from "./Pages/Aboutme";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* MOBILE TOP PROFILE CARD */}
      <div className="mobile-top-banner">
        <img src="/aman.jpg" className="mtb-img" />

        <h3 className="mtb-name">Shaik Aman Sayer</h3>
        <p className="mtb-role">Senior Analyst</p>

        <p className="mtb-mini">📧 amansayer1313@gmail.com</p>
        <p className="mtb-mini">📱 6309130028</p>

        <div className="mtb-social">
          <a
            href="https://www.linkedin.com/in/shaik-aman-sayer-503881250/"
            className="social-icon"
          >
            <i class="devicon-linkedin-plain"></i>
          </a>
          <a href="https://github.com/shaikamansayer13" className="social-icon">
            <i class="devicon-github-original"></i>
          </a>
          <a
            href="https://leetcode.com/u/Shaik_Aman_Sayer/"
            className="social-icon"
          >
            <i class="devicon-leetcode-plain"></i>
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <Header />

      {/* LAYOUT */}
      <div className="layout">
        {/* DESKTOP SIDEBAR */}
        <SidebarProfile />

        <div className="right-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
