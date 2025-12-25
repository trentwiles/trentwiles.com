import Header from "../components/Header";
import Footer from "../components/Footer";
import useHeaderData from "../useHeaderData";


export default function ProjectsPage() {
  return (
    <>
      <Header {...useHeaderData()} />
      <main className="container py-6">
        {/* place content here */}
      </main>
      <Footer />
    </>
  );
}
