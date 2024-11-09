// Insérer le contenu de l'en-tête
document.getElementById("header").innerHTML = `
    <h1>${content.header.title}</h1>
    <p>${content.header.subtitle}</p>
`;

// Insérer le contenu du menu de navigation
document.getElementById("nav").innerHTML = `
    <ul>
        ${content.nav
          .map((item) => `<li><a href="${item.link}">${item.name}</a></li>`)
          .join("")}
    </ul>
`;

// Insérer le contenu de la section À Propos
document.getElementById("about").innerHTML = `
    <h2>${content.about.title}</h2>
    <p>${content.about.description}</p>
`;

// Insérer le contenu de la section Services
document.getElementById("services").innerHTML = `
    <h2>${content.services.title}</h2>
    <ul>
        ${content.services.list
          .map((service) => `<li>${service}</li>`)
          .join("")}
    </ul>
`;

// Insérer le contenu de la section Certifications
document.getElementById("certifications").innerHTML = `
    <h2>${content.certifications.title}</h2>
    <p>${content.certifications.description}</p>
`;

// Insérer le contenu de la section Contact
document.getElementById("contact").innerHTML = `
    <h2>${content.contact.title}</h2>
    <p>${content.contact.description}</p>
    <button onclick="contactForm()">${content.contact.buttonText}</button>
`;

// Insérer le contenu du pied de page
document.getElementById("footer").innerHTML = `
    <p>${content.footer}</p>
`;

// Fonction de contact
function contactForm() {
  alert(
    "Merci de votre intérêt ! Veuillez nous contacter à : email@prof-allemand.com"
  );
}
