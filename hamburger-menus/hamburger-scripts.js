document.getElementsByClassName('hamburger')[0].addEventListener('click', animateHamburger);
var hamburger = document.getElementsByClassName('hamburger')[0];
var overlay = document.getElementsByClassName('overlay')[0];
var hamburgerContainer = document.getElementById('hamburger-container');
var mobileItem = document.getElementsByClassName("mobile-item");
var i;

for (i = 0; i < mobileItem.length; i++) {
    mobileItem[i].addEventListener('click', animateHamburger);
  }

function animateHamburger(){
    if(hamburger.classList.contains('is-active')){
        hamburger.classList.remove('is-active');
        overlay.style.height = "0%";
        hamburgerContainer.style.backgroundColor = "#254350";
    } else {
    hamburger.classList.add('is-active');
    overlay.style.height = "100%";
    hamburgerContainer.style.backgroundColor = "#8D2E24";
}
}
