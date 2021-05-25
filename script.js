var navbar = document.getElementById('navbar');

if (window.location.pathname.includes ('index.html') || (window.location.pathname === ('nitebreak.com'))){
    navbar.style.background = "transparent";
} else {
    navbar.style.background = "#251B4C";
}

console.log(window.location.pathname);