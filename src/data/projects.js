// Each slug must be unique: lowercase words separated by hyphens.
export const projects = [
  {
    slug: "insightful-mind",
    title: "Insightful Mind",
    category: "Full-stack web",
    dates: "Mar 2026 – May 2026",
    team: "Team of four",
    technologies: ["Python", "JavaScript", "HTML", "Redis", "Google Sign-In"],
    summary:
      "A mental-health web app with journaling, mood check-ins, and a three-word emotional reflection tool.",
    problem:
      "Students who want to track how they feel often find journaling apps either too heavy or too generic. We wanted a lightweight way to check in daily and notice patterns over time.",
    role:
      "Built front-end and back-end components as one of four developers, working on the journaling and check-in features and connecting them to the shared data layer.",
    approach:
      "The back end is written in Python and stores entries and check-ins in a Redis database. Users sign in with Google, so the app never handles passwords directly. The front end uses HTML and JavaScript. AI-powered personalized insights are planned as a next step.",
    outcome:
      "Learned how to split a full-stack feature across a team, agree on data formats between front end and back end, and why delegating authentication to a trusted provider reduces security risk.",
  },
  {
    slug: "networked-blackjack",
    title: "Networked Blackjack",
    category: "Networking",
    dates: "Oct 2025 – Dec 2025",
    team: "Course project",
    technologies: ["Java", "TCP sockets", "Client-server"],
    summary:
      "A multi-client Blackjack game where players connect to a central Java server over TCP.",
    problem:
      "Several players on different machines needed to see the same game state in real time, even when a connection dropped mid-hand.",
    role:
      "Designed the application-layer protocol, wrote the client-server networking code, and built the console interface for live game updates.",
    approach:
      "Used Java TCP socket programming with a centralized server that owns the game logic. Defined message formats for player actions and state synchronization so every client stays consistent, and added error handling and connection management for network interruptions.",
    outcome:
      "Learned how protocols are designed from the ground up and how much of networked software is handling failure — a direct foundation for my cybersecurity interest in how systems communicate and break.",
  },
  {
    slug: "connect-four",
    title: "Connect Four",
    category: "Desktop application",
    dates: "Apr 2025 – May 2025",
    team: "Team project",
    technologies: ["Java", "Swing", "AWT", "UML"],
    summary:
      "An object-oriented Connect Four game with an animated Java Swing interface.",
    problem:
      "Build a complete, playable desktop game with a clean structure that several teammates could work on at the same time.",
    role:
      "Helped design the system with UML diagrams, implemented game logic and GUI components, and integrated individual parts into the final application.",
    approach:
      "Organized logic and state across eight classes using core OOP principles. Built the GUI with Java Swing and AWT, including an interactive grid, animated piece placement, and real-time game status. The team coordinated weekly tasks to keep integration smooth.",
    outcome:
      "Learned how up-front design (UML) makes team integration easier, and how separating game state from the interface keeps code testable and easy to change.",
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio",
    category: "Front-end web",
    dates: "Oct 2026",
    team: "Individual",
    technologies: ["React", "Vite", "React Router", "GitHub Actions"],
    summary:
      "This site: a routed, accessible single-page portfolio deployed automatically to GitHub Pages.",
    problem:
      "Present my experience and projects to recruiters in a fast, accessible site that I can update easily.",
    role: "Built and deployed the entire site individually for CSCI 4360 Web Technologies.",
    approach:
      "Function components with Hooks, data-driven project cards, hash-based routing for GitHub Pages, a controlled search filter, and a persistent light/dark theme stored in localStorage. A GitHub Actions workflow lints, builds, and deploys on every push.",
    outcome:
      "Learned the difference between development, build, and preview, and why a static host needs both the correct asset base path and hash routing.",
  },
];
