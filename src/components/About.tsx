
const About = () => {
  return (
    <section id="about">
      <div className="terminal-window max-w-4xl mx-auto">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">$ about-me</h3>
          <p className="text-muted-foreground leading-relaxed">
            I’m a dynamic cybersecurity professional with a B.Tech in Mechanical Engineering and 1+ year as a Security Analyst at Pragma Edge Inc. Skilled in vulnerability assessments, penetration testing, SAST, and incident response. Fueled by a passion for AI, blockchain, cloud, and crypto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
