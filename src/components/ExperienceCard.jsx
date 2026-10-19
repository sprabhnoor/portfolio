export default function ExperienceCard({ experience }) {
  const { title, org, location, dates, points } = experience;
  return (
    <article className="card experience-card">
      <div className="experience-head">
        <h3>
          {title} <span className="muted">· {org}</span>
        </h3>
        <p className="muted small">
          {dates} · {location}
        </p>
      </div>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
