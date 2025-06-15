
import { Github } from 'lucide-react';

const caseStudies = [
  {
    title: "Penetration Test @ Pragma Edge Inc.",
    problem: "Identified and mitigated critical server vulnerabilities.",
    approach: "Conducted a comprehensive penetration test, developed a custom exploit PoC, and delivered a detailed report with actionable recommendations.",
    impact: "Achieved a 90% reduction in critical security alerts, significantly strengthening the company's security posture.",
    codeSnippet: "// CVE-2024-XXXX exploit snippet\nfetch('vulnerable-api/exploit')\n  .then(res => res.json())\n  .then(console.log);",
    link: "#"
  },
  {
    title: "OSINT Automation @ Virtually Testing",
    problem: "Manual data gathering for reconnaissance was slow and inefficient.",
    approach: "Designed and implemented an automated OSINT pipeline using Python and Scrapy, storing results in a structured database.",
    impact: "Reduced reconnaissance phase time by 5x, enabling faster and more effective security assessments.",
    codeSnippet: "# osint_pipeline.py\n\ndef gather_intel(target):\n    # ... scraping logic ...\n    save_to_db(results)\n    return results",
    link: "#"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies">
      <h3 className="text-3xl font-bold text-center mb-12 text-primary">Flagship Case Studies</h3>
      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <div key={index} className="flex flex-col md:flex-row-reverse md:even:flex-row gap-8 md:gap-12 items-center group">
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-primary group-hover:animate-glitch">{study.title}</h4>
              <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Problem:</strong> {study.problem}</p>
              <p className="mt-2 text-muted-foreground"><strong className="text-foreground">Approach:</strong> {study.approach}</p>
              <p className="mt-2 text-muted-foreground"><strong className="text-foreground">Impact:</strong> {study.impact}</p>
              <a href={study.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary hover:underline">
                View Details on GitHub <Github className="h-4 w-4" />
              </a>
            </div>
            <div className="md:w-1/2 w-full">
              {study.codeSnippet && (
                <pre className="bg-black/50 p-4 rounded-md text-sm text-green-300 whitespace-pre-wrap border border-primary/20">
                  <code>{study.codeSnippet}</code>
                </pre>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
