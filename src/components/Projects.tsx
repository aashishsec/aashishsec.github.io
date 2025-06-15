
import { Github } from 'lucide-react';

const projects = [
  {
    title: "GhostRecon",
    description: "A passive reconnaissance tool for discovering domains and subdomains for a target.",
    tech: ["Reconnaissance", "Domain Discovery"],
    link: "https://github.com/aashishsec/GhostRecon",
  },
  {
    title: "My-dorks",
    description: "Generates Google, Shodan, and GitHub dorks for bug bounty hunting.",
    tech: ["Google Dorks", "Shodan", "GitHub"],
    link: "https://aashishsec.github.io/docks/",
  },
  {
    title: "HttpAlive",
    description: "A web probing tool to discover alive subdomains and URLs with concurrency options.",
    tech: ["Web Probing", "Subdomain Discovery"],
    link: "https://aashishsec.github.io/httpAlive/",
  },
  {
    title: "HackHive",
    description: "A Docker environment for bug bounties, pre-loaded with essential tools.",
    tech: ["Docker", "Bug Bounty", "Tooling"],
    link: "https://aashishsec.github.io/HackHive/",
  },
  {
    title: "BBTools Installer",
    description: "A simple installer script for various bug bounty tools to set up your environment quickly.",
    tech: ["Shell Scripting", "Automation"],
    link: "https://aashishsec.github.io/BBTools/",
  },
  {
    title: "SubDominator",
    description: "Efficiently discover subdomains for a target domain with minimal impact.",
    tech: ["Subdomain Discovery", "Bug Bounty"],
    link: "https://github.com/aashishsec/Subdominator",
  },
  {
    title: "pyWebCrawler",
    description: "A Python-based web crawler to extract URLs, subdomains, and JavaScript files.",
    tech: ["Python", "Web Crawling", "URL Extraction"],
    link: "https://aashishsec.github.io/pyWebCrawler/",
  },
  {
    title: "subBruter",
    description: "A tool to efficiently probe for alive subdomains from a provided wordlist.",
    tech: ["Subdomain Brute-forcing", "Go"],
    link: "https://aashishsec.github.io/subBruter/",
  },
  {
    title: "portProbe",
    description: "A tool to efficiently probe for open ports on IP addresses and subdomains.",
    tech: ["Port Scanning", "Networking", "Go"],
    link: "https://aashishsec.github.io/portProbe/",
  },
  {
    title: "DirBrute",
    description: "A tool to efficiently probe for alive endpoints from a provided wordlist.",
    tech: ["Directory Brute-forcing", "Go"],
    link: "https://aashishsec.github.io/dirBrute/",
  },
];

const ProjectCard = ({ project }) => {
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
          View Project <Github className="h-4 w-4" />
        </a>
      </div>
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
