// Affiche l'heure locale chaque seconde et « Hello world » au clic sur le bouton. Aucune dépendance.
const heure = document.getElementById("heure");
const message = document.getElementById("message");

function afficherHeure() {
  heure.textContent = new Date().toLocaleTimeString("fr-FR");
}

afficherHeure();
setInterval(afficherHeure, 1000);

document.getElementById("bouton").addEventListener("click", () => {
  message.textContent = "Hello world";
});
