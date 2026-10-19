import { Link } from "react-router";
import TagList from "./TagList.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <p className="eyebrow">{project.category}</p>
      <h2>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p>{project.summary}</p>
      <TagList items={project.technologies} label={`${project.title} technologies`} />
    </article>
  );
}
