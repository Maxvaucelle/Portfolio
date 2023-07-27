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

// Fonction pour afficher le paragraphe lorsqu'il est visible dans la fenêtre du navigateur
function afficherPresentation(paragraph) {
    if (isElementInViewport(paragraph)) {
        paragraph.style.visibility = 'visible';
        paragraph.style.opacity = '1';
        paragraph.classList.add('fade-in');
        paragraph.classList.add('slideUp');
        window.removeEventListener('scroll', afficherPresentation);
    }
}

// Les paragraphes
var paragraphs = [
    document.getElementById('hiddenPresentation'),
    document.getElementById('hiddenPresent2'),
    document.getElementById('hiddenPresent3'),
    document.getElementById('hiddenPresent4'),
    document.getElementById('hiddenPresent5'),
    document.getElementById('hiddenPresent6')
];

// Ajouter un écouteur d'événement sur le défilement de la page pour appeler la fonction pour chaque paragraphe
window.addEventListener('scroll', function() {
    paragraphs.forEach(paragraph => {
        afficherPresentation(paragraph);
    });
});



