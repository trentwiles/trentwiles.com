import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderData from "../useHeaderData";
import Hero from "../components/Hero";
import Section from "../components/Section";
import LargeButton from "../components/LargeButton";


export default function Tools() {
  return (
    <>
      <Header {...useHeaderData()} />
            <main id="skip-header-content" role="main">
              <Hero
                title="Tools"
                subtitle={
                  "This is a collection of tools I have developed and have made public."
                }
              />
              <Section title="Criminal Justice">
                <a href="https://nupd.trentwiles.com" target="_blank">
                  <LargeButton fontAwesomeIcon="map" text="NUPD Activity Map" key={"1"}/>
                </a>
              </Section>
              <hr />
              </main>
      <Footer />
    </>
  );
}
