
document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

function main(event) {
    event.preventDefault();
    window.location.href = "main.html";
}

function contact(event) {
    event.preventDefault();
    window.location.href = "contact.html";
}

function about(event){
    event.preventDefault();
    window.location.href = "about.html";
}