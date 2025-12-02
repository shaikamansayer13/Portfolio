import React from "react";

// Devicon class mapping for each skill
const skillIcons = {
  C: "devicon-c-plain colored",
  Java: "devicon-java-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  Python: "devicon-python-plain colored",

  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  React: "devicon-react-original colored",
  "UI/UX": "devicon-figma-plain colored",

  SQL: "devicon-mysql-plain colored",

  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  "VS Code": "devicon-vscode-plain colored",
  Netlify: "devicon-netlify-plain colored",


  "Responsive Design": "devicon-bootstrap-plain colored",
  Debugging: "devicon-chrome-plain colored",
};

const skillsData = [
  {
    category: "🖥️ Languages",
    items: ["C", "Java", "JavaScript", "Python"],
  },
  {
    category: "🎨 Frontend Development",
    items: ["HTML", "CSS", "React", "UI/UX"],
  },
  {
    category: "🗄️ Databases",
    items: ["SQL"],
  },
  {
    category: "🛠️ Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Netlify"],
  },
  {
    category: "✨ Other Skills",
    items: ["🧠 Problem Solving", "Responsive Design", "Debugging"],
  },
];

export default function Skills() {
  return (
    <div>
      <h1 className="section-title">Technical Skills</h1>

      <div className="skills-wrapper">
        {skillsData.map((skill, index) => (
          <div className="skills-card" key={index}>
            <h2 className="skills-heading">{skill.category}</h2>

            <div className="skills-badges">
              {skill.items.map((item, i) => (
                <span className="skill-badge" key={i}>
                  <i className={skillIcons[item]}></i> {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
