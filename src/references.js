function serviceInit() {
  const services = [
    "Brand strategy",
    "Corporate Identity & Website development",
    "SEO & copywriting",
    "Media Relations",
    "Digital marketing & content production",
    "Influencer relations"
  ];

  const description = "Our strategic approach is a collaborative journey that starts with analysing the initial situation and leads to messages that cut through the information overload. We take care of content production and maintain relationships with multipliers to position your brand in the best possible way.From analysis to implementation, we accompany you every step of the way, ensuring that every measure is effective."

  const listRoot = document.getElementById('service-list');
  const descRoot = document.getElementById('service-description');

  if (!listRoot || !descRoot) {
    console.error('Check IDs in service.html: #service-list and #service-description must exist.');
    return;
  }

  services.forEach(text => {
    const el = document.createElement('h1');
    el.textContent = text;
    listRoot.appendChild(el);
  });

  descRoot.textContent = description;
}

const waitForService = setInterval(() => {
  if (document.getElementById('service-list') && document.getElementById('service-description')) {
    clearInterval(waitForService);
    serviceInit();
  }
}, 50);