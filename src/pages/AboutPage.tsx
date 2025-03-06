const About = () => {
  return (
    <section className="about-section section">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profile-image">
          {/* Add your image here */}
          <img src="/path-to-your-profile-picture.jpg" alt="Your Name" />
        </div>
        <div className="about-text">
          <p>Hello! I'm Matti Pohjanoksa, a Software developer student at <a href="https://www.haaga-helia.fi/fi" target="_blank" rel="noreferrer">Haaga-Helia</a></p>
          <p>I specialize in x and have a passion for x.</p>
          <p>Currently, I'm x.</p>
          
          <h2>My Skills</h2>
          <ul className="skills-list">
            <li>JavaScript/TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Spring Boot</li>
            <li>Python</li>
            <li>Linux</li>
            <li>Scripting (Mainly on linux)</li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
    
  );
};

export default About;