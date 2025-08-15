import "./App.css";
import Accordion from "./components/Accordion";
import AccordionContainer from "./components/AccordionContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Project, { type ProjectProps } from "./components/Project";
import LargeButton from "./components/LargeButton";
function App() {
  const projects: ProjectProps[] = [
    {
      name: "SitDownAndStudy",
      description:
        "Practice programming with AI-generated, LeetCode-style questions and run your code online. Created with Anish Sahoo.",
      skills: ["Python", "TypeScript (React)", "OpenAI API"],
      url: "https://github.com/trentwiles/SitDownAndStudy",
    },
    {
      name: "Hacker News Clone",
      description:
        "Full stack Hacker News inspired website written in Go and React (shadcn). Features for posting, commenting, voting, and profile customization. (I love relational databases...)",
      skills: ["Go", "TypeScript (React)", "PostgreSQL", "Docker"],
      url: "https://github.com/trentwiles/hackernews",
    },
    {
      name: "RAG Pipeline Metrics",
      description:
        "Partnered with NetApp Instaclustr to build a RAG pipeline powered by Mistral 7B that benchmarked query latency across Postgres, Cassandra, OpenSearch, and ClickHouse. Developed with a team as part of Northeastern University's software engineering Dialogue of Civilizations in Sydney, Australia.",
      skills: [
        "Python",
        "gRPC",
        "PostgreSQL",
        "Clickhouse",
        "Cassandra",
        "OpenSearch",
      ],
      url: "https://github.com/Camille-Ferrell/rag-project/tree/basic-rag",
    },
    {
      name: "Trace TL;DR",
      description:
        "Summarizes Northeastern's TRACE professor evaluations, using MongoDB and Google's Gemini AI.",
      skills: ["MongoDB", "Python", "Gemini", "Varnish", "JQuery", "HTML/CSS"],
      url: "https://github.com/trentwiles/tracetldr",
    },
    {
      name: "Shore Line East API",
      description:
        "Unofficial API for Shore Line East, Connecticut's shoreline commuter rail system. Developed by scraping data from their website.",
      skills: ["Python", "Beautiful Soup", "Varnish"],
      url: "https://github.com/trentwiles/shorelineeastapi",
    },
  ];

  const legacyProjects: ProjectProps[] = [
    {
      name: "AP Calculus BC Final",
      description:
        "Tool that compares Integrals to Riemann Sums and the Midpoint Rule. This is the final project for my AP Calculus BC class for my senior year of high school. (2023)",
      skills: ["JavaScript", "LaTeX"],
      url: "https://github.com/trentwiles/CalcBCFinal",
    },
    {
      name: "Flag",
      description: "Upload and watch videos. A primitive YouTube clone. (2021)",
      skills: ["PHP", "MySQL"],
      url: "https://github.com/trentwiles/Flag",
    },
    {
      name: "1337git",
      description: "Private Github frontend. (2022)",
      skills: ["PHP", "MySQL", "JavaScript"],
      url: "https://github.com/trentwiles/1337git",
    },
    {
      name: "Dangerous User DB",
      description: "Track reports of fraud on Discord accounts. PHP was my first language... I have regrets. (2020)",
      skills: ["PHP", "MySQL", "Apache Web Server"],
      url: "https://github.com/trentwiles/dangeroususerdb",
    },
  ];
  return (
    <>
      <Header />
      <main id="skip-header-content" role="main">
        <Hero
          title="👋"
          subtitle={
            "I'm Trent Wiles, a Computer Science & Criminal Justice student studying at Northeastern University. " +
            "I program, cycle, and travel the world from time to time."
          }
        />
        <Section title="Technical Skills">
          <AccordionContainer id="01">
            <Accordion
              buttonTitles={["Python", "Ruby"]}
              childId="01"
              parentId="01"
              title="Languages"
            />
          </AccordionContainer>
        </Section>
        <Section title="Projects">
          {projects.map((proj, index) => (
            <Project key={index} {...proj} />
          ))}
        </Section>
        <Section title="Legacy Projects">
          {legacyProjects.map((proj, index) => (
            <Project key={index} {...proj} />
          ))}
        </Section>
        <Section title="Contact">
          <LargeButton fontAwesomeIcon="envelope" text="me@trentwil.es" />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
