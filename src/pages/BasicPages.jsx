import { Link } from "react-router";
import PageHeading from "../components/PageHeading.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import TagList from "../components/TagList.jsx";
import { profile, education, skillGroups, experiences } from "../data/profile.js";
import { projects } from "../data/projects.js";

export function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Computer Science · {profile.school}</p>
      <PageHeading title={profile.name} tabTitle="Home" />
      <p className="lead">
        I'm a senior studying Computer Science who builds networked and full-stack
        applications in Java, Python, and JavaScript. I'm looking for{" "}
        <strong>cybersecurity, IT, or product management</strong> internships and
        entry-level roles for Spring 2027 and beyond.
      </p>
      <p>
        My coursework taught me how systems talk to each other — I've written a
        TCP client-server game and its protocol from scratch — and a product
        management externship at BeReal taught me how user research shapes what
        gets built. I'm currently building cybersecurity foundations through
        independent practice in networking, Linux, and security tools.
      </p>
      <div className="actions">
        <Link to="/projects" className="button">
          Explore my projects
        </Link>
        <Link to="/experience" className="button secondary">
          See my experience
        </Link>
      </div>

      <h2>At a glance</h2>
      <ul className="stats">
        <li>
          <strong>{projects.length}</strong> projects in Java, Python, and the web
        </li>
        <li>
          <strong>{experiences.length}</strong> roles, from product to building access control
        </li>
        <li>
          <strong>May 2027</strong> expected graduation
        </li>
      </ul>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <PageHeading title="Experience" />

      <h2>Education</h2>
      <article className="card">
        <h3>{education.school}</h3>
        <p>
          {education.degree}
          <br />
          <span className="muted small">
            {education.dates} · {education.location}
          </span>
        </p>
        <ul>
          {education.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </article>

      <h2>Skills</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3>{group.label}</h3>
            <TagList items={group.items} label={group.label} />
          </div>
        ))}
      </div>

      <h2>Work experience</h2>
      <div className="stack">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <PageHeading title="Contact" />
      <p className="lead">
        I'm open to internship and entry-level conversations in cybersecurity, IT,
        systems, and product management. The best way to reach me is LinkedIn.
      </p>
      <ul className="contact-list">
        <li className="card">
          <h2>LinkedIn</h2>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            Connect with me on LinkedIn
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li className="card">
          <h2>GitHub</h2>
          <a href={profile.github} target="_blank" rel="noreferrer">
            View my GitHub profile
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <PageHeading title="Page not found" />
      <p>That page doesn't exist. It may have moved, or the link may have a typo.</p>
      <Link to="/" className="button">
        Return home
      </Link>
    </section>
  );
}
