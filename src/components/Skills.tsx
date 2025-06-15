
import { Code, Shield, Cloud, TerminalSquare, Award } from 'lucide-react';

const skills = [
  { category: "Languages", items: "Python, Java, JavaScript, HTML5, CSS", Icon: Code },
  { category: "Security", items: "OSINT, Web & Network Penetration Testing, SAST, IDS/IPS", Icon: Shield },
  { category: "Cloud", items: "AWS", Icon: Cloud },
  { category: "Tools", items: "Kali Linux, Burp Suite, Metasploit", Icon: TerminalSquare },
  { category: "Certifications", items: "CAP, CNSP, ISO 27001 Master’s, Jr. Pen Tester, API Pen Testing", Icon: Award }
];

const Skills = () => {
  return (
    <section id="skills">
      <h3 className="text-3xl font-bold text-center mb-12 text-primary">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(skill => (
          <div key={skill.category} className="border p-6 rounded-lg hover:border-primary hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
              <skill.Icon className="h-5 w-5" />
              {skill.category}
            </h4>
            <p className="text-muted-foreground">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
