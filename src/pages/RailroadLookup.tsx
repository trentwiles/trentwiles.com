import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import useHeaderData from "../useHeaderData";

type ApiResult = {
  created_at: string;
  mark: string;
  name: string;
  notes: string;
  status: string;
  updated_at: string;
};

export default function RailroadLookup() {
  const headerData = useHeaderData();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<ApiResult[] | null>(null);

  const search = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    setResults(null);

    const trimmed = query.trim();
    if (!trimmed) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://riverside.rocks/_/reporting/reportingMarkSearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: trimmed }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data && Array.isArray(data.results)) {
        setResults(data.results as ApiResult[]);
      } else {
        setResults([]);
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message ?? String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header {...headerData} />

      <main>
        <Section title="Railroad Lookup">
          <form onSubmit={search} className="mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <label htmlFor="rr-search" className="sr-only">
                  Search
                </label>
                <input
                  id="rr-search"
                  className="form-control"
                  placeholder="Search railroad mark (e.g. BNSF)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search railroad mark"
                />
              </div>

              <div className="col-md-auto mt-2 mt-md-0">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Searching…" : "Search"}
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {results === null && (
            <p className="text-muted">Enter a search term and press Search.</p>
          )}

          {results && results.length === 0 && (
            <div className="alert alert-info">No results found.</div>
          )}

          {results && results.length > 0 && (
            <div className="list-group">
              {results.map((r) => (
                <div key={r.mark} className="list-group-item">
                  <h3 className="h6 mb-1">{r.name} <small className="text-muted">({r.mark})</small>&nbsp;<a href={"https://duckduckgo.com/?q=" + r.name} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
                  <p className="mb-1">{r.notes}</p>
                  <p className="mb-0 text-muted">
                    Status: {r.status}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Section>
      </main>

      <Footer />
    </>
  );
}
