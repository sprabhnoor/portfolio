# Prabhnoor Singh — React Portfolio

Personal portfolio for CSCI 4360 Web Technologies (Fall 2026), built with **React + Vite**, routed with **React Router v7 (HashRouter)**, and deployed to **GitHub Pages** with GitHub Actions.

- **Live site:** https://sprabhnoor.github.io/portfolio/
- **Repository:** https://github.com/sprabhnoor/portfolio

## Run locally

```bash
npm install
npm run dev        # development server with hot reload (http://localhost:5173/portfolio/)
npm run lint       # oxlint
npm run build      # production build into dist/
npm run preview    # serve dist/ locally (http://localhost:4173/portfolio/)
```

Requires Node 20.19+ or 22.12+.

## Structure

```
src/
  main.jsx                 mounts <App> inside <HashRouter> and <StrictMode>
  App.jsx                  route table (pathless layout route + children)
  components/
    Layout.jsx             header, NavLink navigation, skip button, <Outlet>, footer
    ThemeToggle.jsx        extension B: persistent light/dark theme
    ProjectCard.jsx        one project summary card (props: project)
    ExperienceCard.jsx     one job (props: experience)
    TagList.jsx            reusable pill list for skills/technologies
    PageHeading.jsx        <h1> + useEffect that syncs the browser tab title
  pages/
    BasicPages.jsx         Home, Experience, Contact, NotFound
    Projects.jsx           data-driven cards + controlled filter + no-match state
    ProjectDetail.jsx      /projects/:slug via useParams, with unknown-slug handling
  data/
    profile.js             education, skills, experience, links
    projects.js            project array (slug is the stable key and URL segment)
```

## Routes

| URL | View |
| --- | --- |
| `#/` | Home |
| `#/experience` | Education, skills, work experience |
| `#/projects` | Filterable project cards |
| `#/projects/:slug` | Project detail (problem, role, implementation, lesson) |
| `#/contact` | LinkedIn and GitHub |
| `#/anything-else` | Page not found (wildcard route) |
| `#/projects/unknown` | Project not found (detail route, no matching data) |

## Extension: B — persistent color theme

`ThemeToggle` keeps a `dark` boolean in `useState`. The lazy initializer reads `localStorage` once so the saved choice is restored. A `useEffect` with `[dark]` as its dependency synchronizes that state with things outside React: it sets `data-theme` on `<html>` (which the CSS variables in `index.css` respond to) and writes the choice to `localStorage`. Both storage calls are wrapped in `try/catch`, so the toggle still works when storage is blocked. The toggle lives in `Layout` outside the `<Outlet>`, so it stays mounted while routes change. `aria-pressed` tells screen readers whether dark mode is on. A tiny script in `index.html` applies the saved theme before React loads to avoid a light flash.

The preference is local to this browser and origin; it is not shared across devices.

## Deployment notes

- `vite.config.js` sets `base: "/portfolio/"` so built asset URLs point at `/portfolio/assets/...` instead of the domain root.
- `HashRouter` keeps the route after `#`, so the server is only ever asked for `/portfolio/`. Refreshing a deep link like `#/projects/connect-four` works on GitHub Pages without any server fallback.
- `.github/workflows/deploy.yml` runs `npm ci`, `npm run lint`, and `npm run build`, then deploys `dist/` on every push to `main`.

## Verification checklist

- [x] `npm run lint` passes with no errors
- [x] `npm run build` succeeds; `dist/index.html` references `/portfolio/assets/...`
- [x] All five views render, each with one `<h1>`
- [x] Active nav link is highlighted; Home is not active on other pages (`end` prop)
- [x] Navigation changes the view without a full page reload
- [x] Filter is case-insensitive and ignores surrounding spaces ("  JAVA " → 3 results)
- [x] Filter with no matches shows a message; clearing the filter shows all projects
- [x] `#/no-such-page` shows "Page not found"
- [x] `#/projects/no-such-project` shows "Project not found"
- [x] Dark theme persists after refresh and while navigating
- [x] No horizontal scrolling at 390px wide; layout adapts on mobile
- [x] Keyboard: Tab shows a visible focus outline; "Skip to content" appears on first Tab
- [x] No console errors
- [ ] Deployed site loads at https://sprabhnoor.github.io/portfolio/
- [ ] Refreshing a project detail page on the live site works
- [ ] Tested in a private browser window

## Credits

Structure follows the CSCI 4360 assignment tutorial. Built with help from Claude (Anthropic) as an AI assistant; content is drawn from my resume.
