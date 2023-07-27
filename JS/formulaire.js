// expression régulière pour verifier si c'est non vide
let regExpNonVide = /.+/;
// expression régulière pour verifier que les caractères entrés pour le nom et le prenom sont soit une lettre de l'alphabet en majuscule ou minuscule ou le tiret l'apostrophe ou le underscore
let regEXNomPrenomValide = /^[a-zA-Z\s\-\'_]+$/;
// expression régulière pour l'email valide decrite dans le support
let regExEmail = /^[a-z][a-z_0-9\.\-]+@[a-z_0-9\.\-]+\.[a-z]{2,3}$/;
// booléen d'erreur pour les controles
let erreurDetectee = false;

// Première fonction saisie obligatoire pour certain champs qui prend en parametre l'input sur laquelle elle est lancée
function saisieObligatoire(inputDeclencheur) {
  // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
  if (erreurDetectee) {
    erreurDetectee = false;
  } else {
    // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
    if (regExpNonVide.test(inputDeclencheur.value) == false) {    
      inputDeclencheur.focus();
      // je met mon booleen erreur à true
      erreurDetectee = true;
      return false;
    }
  }
  return true;
}

function formatNomPrenom(inputDeclencheur) {
  // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
  if (erreurDetectee) {
    erreurDetectee = false;
  } else {
    // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
    if (regEXNomPrenomValide.test(inputDeclencheur.value) == false) {
        window.alert("Le format n'est pas respecté");
      inputDeclencheur.focus();
      // je met mon booleen erreur à true
      erreurDetectee = true;
      return false;
    }
  }
  return true;
}

function formatEmail(inputDeclencheur) {
  // si j'ai une erreur détectée précédement je la re initialise à faux sinon je fais mon controle
  if (inputDeclencheur.value != "") {
    if (erreurDetectee) {
      erreurDetectee = false;
    } else {
      // si mon expression réguliere est testé et que ma réponse est fausse alors j'indique à l'utilisateur qu'il doit remplir le champs.
      if (regExEmail.test(inputDeclencheur.value) == false) {
        window.alert("Le format E-mail n'est pas respecté");
        inputDeclencheur.focus();
        // je met mon booleen erreur à true
        erreurDetectee = true;
        return false;
      }
    }
  }
  return true;
}

function envoyerFormulaire() {
  // je verifie que mes champs obligatoires sont remplis grace à la valeur de mon return dans la fonction.

  if (
    saisieObligatoire(document.getElementById("input-nom")) == false ||
    saisieObligatoire(document.getElementById("input-prenom")) == false ||
    saisieObligatoire(document.getElementById("input-mail")) == false ||
    formatNomPrenom(document.getElementById("input-nom")) == false ||
    formatNomPrenom(document.getElementById("input-prenom")) == false ||
    formatEmail(document.getElementById("input-mail")) == false 
  ) {
    window.alert("erreur dans le formulaire");
    return false;
  } else {
    return true;
  }
}

window.addEventListener("load", function () {

    let btn_valider = document.getElementById('valider');  

    btn_valider.addEventListener('click', function (){
        envoyerFormulaire();
    });

  document.getElementById("input-nom").addEventListener("blur", function () {
    saisieObligatoire(this);
  });
  document.getElementById("input-nom").addEventListener("change", function () {
    formatNomPrenom(this);
  });
  document.getElementById("input-prenom").addEventListener("blur", function () {
    saisieObligatoire(this);
  });
  document.getElementById("input-prenom").addEventListener("change", function () {
    formatNomPrenom(this);
  });
  document.getElementById("input-mail").addEventListener("change", function () {
    formatEmail(this);
  });

});



