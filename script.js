emailjs.init("TON_USER_ID"); // Remplace par ton vrai User ID EmailJS

document.getElementById("formulaire-concours").addEventListener("submit", function (e) {
  e.preventDefault();

  // CAPTCHA simple
  let question = prompt("Combien font 2 + 3 ?");
  if (question !== "5") {
    alert("CAPTCHA incorrect. Veuillez réessayer.");
    return;
  }

  emailjs.send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
    prenom: document.getElementById("prenom").value,
    nom: document.getElementById("nom").value,
    courriel: document.getElementById("courriel").value,
    code: document.getElementById("code").value,
  }).then(
    function () {
      alert("Participation envoyée avec succès !");
      // Redirection vers Instagram
      window.location.href = "https://www.instagram.com/estudiop_photos/";
    },
    function (error) {
      alert("Erreur lors de l'envoi : " + error.text);
    }
  );
});
