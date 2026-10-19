import { useEffect } from "react";

// Renders the page's <h1> and keeps the browser tab title in sync.
export default function PageHeading({ title, tabTitle = title }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${tabTitle} | Prabhnoor Singh`;
    return () => {
      document.title = previousTitle;
    };
  }, [tabTitle]);

  return <h1>{title}</h1>;
}
