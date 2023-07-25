var paragraph = document.getElementById('hiddenPresentation');


// Fonction pour vérifier si l'élément est visible dans la fenêtre du navigateur
function isElementInViewport(paragraph) {
    var rect = paragraph.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
console.log(isElementInViewport);


// Fonction pour afficher le paragraphe lorsqu'il est visible dans la fenêtre du navigateur
function afficherPresentation() {
    if (isElementInViewport(paragraph)) {
        paragraph.style.visibility = 'visible';
        paragraph.style.opacity = '1';
        paragraph.classList.add('fade-in');
        paragraph.classList.add('slideUp');
        window.removeEventListener('scroll', afficherPresentation);
    }
}


paragraph.addEventListener('animationend', function() {
    paragraph.classList.remove('slideUp');
});

// Ajouter un écouteur d'événement sur le défilement de la page pour appeler la fonction
window.addEventListener('scroll', afficherPresentation);
