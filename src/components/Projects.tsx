
import { useState } from 'react';

const projects = [
  {
    title: "JSScanner",
    description: "Python/Selenium tool to find sensitive files.",
    demoOutput: "// Simulated output...\nFetching .env files...\nVulnerabilities found: 3"
  },
  {
    title: "Flow Shop Scheduling",
    description: "Optimized with Artificial & Roach algorithms."
  },
  {
    title: "OSINT Lab",
    description: "Automated data gathering pipelines."
  }
];

const ProjectCard = ({ project }) => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="border p-6 rounded-lg group hover:border-primary transition-all duration-300">
      <h4 className="text-xl font-bold text-primary group-hover:animate-glitch">{project.title}</h4>
      <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
      {project.demoOutput && (
        <>
          <button onClick={() => setShowDemo(!showDemo)} className="text-sm text-primary hover:underline">
            {showDemo ? 'Hide Demo' : 'View Demo'}
          </button>
          {showDemo && (
            <pre className="bg-black/50 p-4 rounded-md mt-4 text-sm text-green-300 whitespace-pre-wrap">
              <code>{project.demoOutput}</code>
            </pre>
          )}
        </>
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
