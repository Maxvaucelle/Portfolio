
document.querySelector("#openAside").addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const toggle = nav.classList.toggle('active');
    const btn_open = document.getElementById('openAside');
    console.log(toggle)
    if (toggle) {
        btn_open.src = '/Ressources/icones/icons8-flèche-bas-64.png';
    } else {
        btn_open.src ='/Ressources/icones/icons8-flèche-haut-64.png';
    }
} )