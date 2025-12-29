
import "../styles/page.css";

function Skills() {
  return (
    <section className="page">
      <h2>Skills</h2>

      <div className="projects-wrapper">

        <div className="project-card glow-cyan">
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>AWS</li>
            <li>Azure Cloud</li>
          
          </ul>
        </div>

        <div className="project-card glow-purple">
          <h3>Programming & Development</h3>
          <ul>
            <li>Python, Node.js</li>
            <li>React.js, Flutter</li>
            <li>HTML, CSS, JavaScript</li>
          
          </ul>
        </div>

        <div className="project-card glow-cyan">
          <h3>AI & Data</h3>
          <ul>

            <li>AI Model Training & Deployment</li>
            <li>Power BI Analytics</li>
            
          </ul>
        </div>

        <div className="project-card glow-purple">
          <h3>Databases & Tools</h3>
          <ul>
            <li>PostgreSQL, MS SQL Server</li>
            <li>Firebase</li>
            <li>Git & GitHub</li>
            <li>Linux & Shell Scripting</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
