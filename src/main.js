// ------------------------------------
// Function: Dynamically load a component
// ------------------------------------
async function loadComponent(id, url) {
  const container = document.getElementById(id);
  if (!container) return; // Skip if no matching container

  try {
    // Resolve path correctly whether inside public/ or root
    const base = window.location.pathname.includes("/public/")
      ? ""
      : "sections/";

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;

    // Re-run <script> tags inside loaded content
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) newScript.src = oldScript.src;
      else newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
      document.body.removeChild(newScript);
    });
  } catch (err) {
    console.error(`❌ Failed to load ${url} into #${id}:`, err);
  }
}

// ------------------------------------
// Ensure components load independently on each page
// ------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  // Load header and footer if their containers exist
  loadComponent("header", "sections/header.html");
  loadComponent("footer", "sections/footer.html");
  loadComponent("footer-index", "sections/footer.html")

  // Load optional sections only if their divs exist
  loadComponent("hero", "sections/hero.html");
  loadComponent("about", "sections/about.html");
  loadComponent("contact", "sections/contact.html");
});
