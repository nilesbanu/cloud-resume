import "../styles/page.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="page">
      <h2>Contact</h2>

      <p className="contact-text">
        I’m always open to opportunities, collaborations, and technical discussions.
        Feel free to reach out.
      </p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/niles-banu-s"
          target="_blank"
          rel="noreferrer"
          className="contact-card linkedin"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/nilesbanu3"
          target="_blank"
          rel="noreferrer"
          className="contact-card github"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:nilesbanu371@gmail.com"
          className="contact-card email"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
