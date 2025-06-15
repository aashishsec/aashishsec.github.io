
const experiences = [
  { role: "Security Analyst", company: "Pragma Edge Inc", date: "Aug 2024–Present" },
  { role: "Cybersecurity Intern", company: "Safe Your Web", date: "May 2023–Aug 2023" },
  { role: "Administrator", company: "Virtually Testing Foundation", date: "Jan 2023–Mar 2023" },
  { role: "G.E.Trainee & Forensics Intern", company: "LTIMindtree & Cyber Secured India", date: "2022" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h3 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h3>
      <div className="relative border-l-2 border-primary/20 max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-4 pl-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background"></div>
            <time className="text-sm font-normal leading-none text-muted-foreground">{exp.date}</time>
            <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
            <p className="text-base font-normal text-primary">{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
