import { NavLink, Outlet } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/profile.js";

export default function Layout() {
  return (
    <>
      {/* A button, not a #fragment link: fragments would conflict with HashRouter */}
      <button
        className="skip-link"
        onClick={() => document.getElementById("main-content")?.focus()}
      >
        Skip to content
      </button>

      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" end className="brand">
            {profile.name}
          </NavLink>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          {/* Outside the Outlet, so it stays mounted across routes */}
          <ThemeToggle />
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          © 2026 {profile.name} · Built with React, Vite, and React Router for
          CSCI 4360 Web Technologies.
        </p>
      </footer>
    </>
  );
}
