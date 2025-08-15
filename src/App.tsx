import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
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
        <Section
          title="Technical Skills"
        >
          <p>d</p>
          </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
