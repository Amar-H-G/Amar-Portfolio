import { useEffect } from "react";

/**
 * SEO component — updates <title>, meta description, and OG tags per page.
 * Usage: <SEO title="..." description="..." />
 */
const SEO = ({
  title = "Amar Patra | Full Stack & React Native Developer",
  description = "Amar Patra is a Full Stack & React Native Developer from Kolkata with 3+ years of experience building scalable apps using React Native, MERN Stack, Pusher, Socket.io, and OneSignal.",
  url = "https://amarpatra.vercel.app/",
  image = "https://amarpatra.vercel.app/Image/new-Image.jpeg",
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/update meta tags
    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Primary
    setMeta("name", "title", title);
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    // Twitter
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, url, image]);

  return null;
};

export default SEO;
