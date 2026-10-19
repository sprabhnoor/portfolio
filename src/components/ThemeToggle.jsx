import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  // Lazy initializer: read the saved preference once, on first render.
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "dark";
    } catch {
      return false;
    }
  });

  // Effect: synchronize React state with things outside React (the <html> element and storage).
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* Theme still works for this visit when storage is unavailable. */
    }
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={dark}
      onClick={() => setDark((d) => !d)}
    >
      <span aria-hidden="true">{dark ? "☾" : "☀"}</span> Dark theme
    </button>
  );
}
