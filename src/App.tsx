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
      skills: ["Python", "TypeScript (React)"],
      url: "https://github.com/trentwiles/SitDownAndStudy",
    },
    {
      name: "Hacker News Clone",
      description:
        " Full stack Hacker News inspired website written in Go and React (shadcn). Features for posting, commenting, voting, and profile customization. (I love relational databases...)",
      skills: ["Go", "TypeScript (React)", "PostgreSQL", "Docker"],
      url: "https://github.com/trentwiles/hackernews",
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
        <Section title="Contact">
          <LargeButton 
            fontAwesomeIcon="envelope"
            text="me@trentwil.es"
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
