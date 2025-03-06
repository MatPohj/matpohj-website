const Contact = () => {
    return (
      <section className="about-section section">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="profile-image">
            {/* Add your image here */}
            <img src="/path-to-your-profile-picture.jpg" alt="Your Name" />
          </div>
          <div className="about-text">
            <p>Hello! I'm [Your Name], a [your profession] with [X years] of experience in [your field].</p>
            <p>I specialize in [your specialties] and have a passion for [your interests].</p>
            <p>Currently, I'm [your current status - working as, studying, etc.].</p>
            
            <h2>My Skills</h2>
            <ul className="skills-list">
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;