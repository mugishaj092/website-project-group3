/* src/references.js */
const servicesData = [
  "Brand strategy",
  "Corporate Identity & Website development",
  "SEO & copywriting",
  "Media Relations",
  "Digital marketing & content production",
  "Influencer relations"
];

const shapeText = `Our strategic approach is a collaborative journey that starts with analysing the initial situation and leads to messages that cut through the information overload. We take care of content production and maintain relationships with multipliers to position your brand in the best possible way. From analysis to implementation, we accompany you every step of the way, ensuring that every measure is effective.`;

/* ---------- core ---------- */
function populateServices() {
  const list = document.getElementById('services-list');
  if (!list) return;
  list.innerHTML = '';
  servicesData.forEach(s => {
    const h2 = document.createElement('h2');
    h2.className = 'font-sans text-[48px] md:text-5xl xl:text-6xl font-medium leading-tight';
    h2.textContent = s;
    list.appendChild(h2);
  });
}

function populateShapeText() {
  const el = document.getElementById('shape-text');
  if (el) el.textContent = shapeText;
}

/* ---------- PUBLIC API ---------- */
window.initReferences = function () {
  populateServices();
  populateShapeText();
};

/* ---------- run when opened directly ---------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initReferences);
} else {
  window.initReferences();
}