/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');

/**************************

 CHANGEMENT ARRIERE-PLAN

 *************************/

// Récupération du <body>
const body = document.body
const listBg = body.querySelector("#bg");
console.log(body, listBg);

// Change l'arrière-plan
body.style.backgroundImage = `url(./img/backgrounds/${listBg.value})`;

// Ecoute l'événement "change" sur la liste déroulante
listBg.addEventListener("change", () => {
    body.style.backgroundImage = `url(./img/backgrounds/${listBg.value})`;
});

/**************************

ENVOI DU FORMULAIRE

 *************************/

// Récupération du formulaire et des champs mot de passe
const formulaire = body.querySelector("form");
const txtPassword = formulaire.querySelector("#pass");
const txtPasswordConfirm = formulaire.querySelector("#confirm");
console.log(formulaire, txtPassword, txtPasswordConfirm);

// Ecoute l'envoi du formulaire
formulaire.addEventListener("submit", (event) => {
    // Stopper l'envoi ou annuler événement
    event.preventDefault();
    // Si mot de passe < 3
    if (txtPassword.value.length < 3) {
        alert("Le mot de passe doit avoir au minimum 3 caractères !");
        return;
    }
    // Si mot de passe et confirmation ne correspondent pas
    if (txtPassword.value !== txtPasswordConfirm.value) {
        alert("mots de passe différents !");
        return; //Termine la fonction
    }
    // Informe l'utilisateur et envoie le formulaire
    alert("compte créé avec succès");
    formulaire.submit();
});

/*****
 Mécanique d'un formulaire:
    - écoute l'envoi du formulaire
    - stoppe l'envoi du formulaire
    - tests
    - envoi du formulaire
 *****/
