import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";
import PageHeading from "../components/PageHeading.jsx";
import TagList from "../components/TagList.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // The route matched, but no data exists for this slug.
  if (!project) {
    return (
      <section>
        <PageHeading title="Project not found" />
        <p>
          There is no project called “{slug}”. It may have been renamed or removed.
        </p>
        <Link to="/projects" className="button">
          Browse all projects
        </Link>
      </section>
    );
  }

  return (
    <article className="detail">
      <Link to="/projects" className="back">
        ← All projects
      </Link>
      <p className="eyebrow">
        {project.category} · {project.dates} · {project.team}
      </p>
      <PageHeading title={project.title} />
      <p className="lead">{project.summary}</p>
      <TagList items={project.technologies} label="Technologies used" />

      <h2>Problem</h2>
      <p>{project.problem}</p>
      <h2>My contribution</h2>
      <p>{project.role}</p>
      <h2>Implementation</h2>
      <p>{project.approach}</p>
      <h2>Result or lesson</h2>
      <p>{project.outcome}</p>

      <Link to="/projects" className="button secondary">
        Back to projects
      </Link>
    </article>
  );
}
