import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");

  // Derived during render — no second copy in state, no Effect needed.
  const normalized = query.trim().toLowerCase();
  const visible = projects.filter((p) =>
    `${p.title} ${p.category} ${p.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <section>
      <PageHeading title="Projects" />
      <p className="lead">
        Coursework and team projects. Select a title to read about the problem, my
        role, how it was built, and what I learned.
      </p>

      <div className="filter">
        <label htmlFor="project-search">Filter by title, category, or skill</label>
        <div className="filter-row">
          <input
            id="project-search"
            type="search"
            value={query}
            placeholder="e.g. Java, networking, Redis"
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button type="button" className="secondary" onClick={() => setQuery("")}>
              Clear
            </button>
          )}
        </div>
      </div>

      <p role="status" className="muted">
        {visible.length} project{visible.length === 1 ? "" : "s"} found
      </p>

      {visible.length ? (
        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="card empty">
          No projects match “{query.trim()}”. Try another search, such as “Java”.
        </p>
      )}
    </section>
  );
}
