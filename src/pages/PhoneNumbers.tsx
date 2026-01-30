import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderData from "../useHeaderData";
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function PhoneNumbers() {
  return (
    <>
      <Header {...useHeaderData()} />
      <main id="skip-header-content" role="main">
        <Hero title="Interesting Phone Numbers" subtitle={""} />

        <div
          style={{
            backgroundColor: "#fef2f2",
            border: "1px solid #dc2626",
            borderLeft: "4px solid #dc2626",
            padding: "1rem 1.5rem",
            margin: "1.5rem auto",
            maxWidth: "900px",
            borderRadius: "4px",
            fontFamily: 'Consolas, "Courier New", monospace',
          }}
        >
          <p
            style={{
              color: "#991b1b",
              fontWeight: 600,
              margin: "0 0 0.5rem 0",
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.025em",
            }}
          >
            *** WARNING ***
          </p>
          <p
            style={{
              color: "#7f1d1d",
              margin: 0,
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}
          >
            These phone numbers may be outdated, disconnected, or reassigned at
            any time. I have no way of verifying whether they are still accurate
            or functional. Whatever you choose to do with this information is
            entirely your own responsibility. I assume no liability for any
            consequences resulting from your use of these numbers.
          </p>
        </div>

        <Section title="Collection">
          <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <code>(978) 343-9121</code>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <code>
                (717) 455-0374
              </code>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <code>
                (407) 487-7572
              </code>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <code>
                (775) 248-0388
              </code>
            </li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}