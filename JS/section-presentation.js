var paragraph2 = document.getElementById('hiddenPresent');


// Fonction pour vérifier si l'élément est visible dans la fenêtre du navigateur
function isElementInViewport2(paragraph2) {
    var rect = paragraph2.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
console.log(isElementInViewport2);


// Fonction pour afficher le paragraphe lorsqu'il est visible dans la fenêtre du navigateur
function afficherPresentation2() {
    if (isElementInViewport2(paragraph2)) {
        paragraph2.style.visibility = 'visible';
        paragraph2.style.opacity = '1';
        paragraph2.classList.add('fade-in2');
        
        window.removeEventListener('scroll', afficherPresentation2);
    }
}

window.addEventListener('scroll', function() {
    var heading = document.getElementById('heading');
    var titleHeading = this.document.getElementById('titleHeading');
    var hr = document.querySelector('hr');
    var sectionPresent = document.getElementById('hiddenPresent');

    var headingPosition = heading.getBoundingClientRect().top;
    var hrPosition = hr.getBoundingClientRect().top;

    if (headingPosition <= 0 && hrPosition >= headingPosition) {
        // Masquer la div section-present
        sectionPresent.style.visibility = 'hidden';
        // Insérer la balise hr après le h2
        titleHeading.insertAdjacentElement('afterend', hr);
        // Déplacer la balise hr en dessous du h2 avec une transition de 1.5s
        hr.style.marginTop = '20px';    
    } else {
        // Afficher la div section-present
        sectionPresent.style.visibility = 'visible';
         // Remettre la balise hr à sa position initiale (à la fin de la section)
        hr.style.marginTop = '0';
        // Remettre la balise hr à sa position initiale (à la fin de la section)
        sectionPresent.insertAdjacentElement('afterend', hr);
    }
});





// Ajouter un écouteur d'événement sur le défilement de la page pour appeler la fonction
window.addEventListener('scroll', afficherPresentation2);