import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderData from "../useHeaderData";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { useState } from "react";
import LargeButton from "../components/LargeButton";

export default function MetroMaps() {
    const [users, setUsers] = useState<number>(-1)
    const [maps, setMaps] = useState<number>(-1)

    fetch(`https://api.subway.trentwiles.com/api/stats`)
      .then(res => res.json())
      .then(data => {
        setMaps(data.maps.total);
        setUsers(data.users.total);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Fetch failed:', err);
        }
      });
  return (
    <>
      <Header {...useHeaderData()} />
      <main id="skip-header-content" role="main">
        {/* place content here */}
            <Hero
            title="Metro Maps Project"
            subtitle={
                <a href="https://subway.trentwiles.com" target="_blank">
                    <LargeButton fontAwesomeIcon="train" text="Website" buttonColor="light" key={"1"}/>
                </a>
            }
            />
            <Section title="Project Information">
                <p>
                    I've developed a simple website to share and download maps from the <a href="https://www.subwaybuilder.com/" target="_blank">Subway Builder</a> game.
                    {((users - maps) != 0) && <> The site currently hosts {maps} maps and {users} users.</>}
                </p>
            </Section>
      </main>
      <Footer />
    </>
  );
}
