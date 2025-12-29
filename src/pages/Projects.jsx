

import "../styles/page.css";

function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>

      <div className="projects-wrapper">

        {/* Project 1 */}
        <div className="project-card glow-cyan">
          <h3>FITME – Fitness Tracking Mobile Application</h3>
          <p className="tech">Flutter · Firebase</p>
          <p>
            A mobile fitness application that enables users to log food intake,
            exercises, and track BMI with real-time analytics.
          </p>
          <ul>
            <li>Secure authentication & user profiles</li>
            <li>Daily streak tracking and reward system</li>
            <li>Health insights and analytics</li>
            <li>Community-driven engagement features</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-card glow-purple">
          <h3>AI-Powered Video Editing Assistant</h3>
          <p className="tech">Next.js · Fabric.js · Tailwind · TypeScript</p>
          <p>
            A smart video editing platform allowing users to apply AI-driven
            enhancements with minimal effort.
          </p>
          <ul>
            <li>AI-based filters, transitions & animations</li>
            <li>Intelligent text overlays</li>
            <li>Professional-quality output</li>
            <li>User-friendly editing experience</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="project-card glow-cyan">
          <h3>NoorQaLab – E-Commerce Web Application</h3>
          <p className="tech">AWS S3 · CloudFront · React</p>
          <p>
            A production-grade e-commerce website hosted using AWS S3 and
            CloudFront for global content delivery.
          </p>
          <ul>
            <li>Frontend built using npm build</li>
            <li>Static hosting via Amazon S3</li>
            <li>Global CDN distribution using CloudFront</li>
            <li>HTTPS-enabled secure deployment</li>
          </ul>
        </div>

        {/* Project 4 */}
        <div className="project-card glow-purple">
          <h3>Portfolio Website</h3>
          <p className="tech">React · Terraform · AWS S3 · CloudFront</p>
          <p>
            A fully automated portfolio website deployed using Infrastructure
            as Code with Terraform.
          </p>
          <ul>
            <li>React-based modern UI</li>
            <li>Terraform-managed AWS infrastructure</li>
            <li>S3 private bucket with CloudFront CDN</li>
            <li>Version-controlled & reproducible deployment</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;
