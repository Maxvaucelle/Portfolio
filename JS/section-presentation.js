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

// Ajouter un écouteur d'événement sur le défilement de la page pour appeler la fonction
window.addEventListener('scroll', afficherPresentation2);