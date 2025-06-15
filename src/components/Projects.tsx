import { useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "JSScanner",
    description: "A Python/Selenium-based tool designed to crawl websites and identify potentially sensitive files (e.g., .js, .json, .env) exposed publicly.",
    tech: ["Python", "Selenium", "Regex"],
    link: "https://github.com/aashishsec",
    demoOutput: "// Simulated output...\n> Analyzing target.com\n> Found sensitive file: /api/config.json\n> Found sensitive file: /.env.local\nVulnerabilities found: 2"
  },
  {
    title: "Flow Shop Scheduling",
    description: "An optimization project applying metaheuristic algorithms to solve the complex Flow Shop Scheduling problem, improving production efficiency.",
    tech: ["Python", "Artificial Bee Colony", "Roach Infestation Algorithm"],
    link: "https://github.com/aashishsec",
  },
  {
    title: "OSINT Lab",
    description: "Developed automated data gathering and analysis pipelines for Open-Source Intelligence (OSINT) operations, streamlining the reconnaissance process.",
    tech: ["Python", "Scrapy", "APIs"],
    link: "https://github.com/aashishsec",
  }
];

const ProjectCard = ({ project }) => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="border p-6 rounded-lg group hover:border-primary transition-all duration-300 flex flex-col">
      <h4 className="text-xl font-bold text-primary group-hover:animate-glitch">{project.title}</h4>
      <p className="text-muted-foreground mt-2 mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech?.map(t => (
          <span key={t} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">{t}</span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
          View on GitHub <Github className="h-4 w-4" />
        </a>
        {project.demoOutput && (
          <button onClick={() => setShowDemo(!showDemo)} className="text-sm text-primary hover:underline">
            {showDemo ? 'Hide Demo' : 'View Demo'}
          </button>
        )}
      </div>

      {showDemo && (
        <pre className="bg-black/50 p-4 rounded-md mt-4 text-sm text-green-300 whitespace-pre-wrap">
          <code>{project.demoOutput}</code>
        </pre>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h3 className="text-3xl font-bold text-center mb-12 text-primary">Projects & Research</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
