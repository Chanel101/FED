// JAVASCRIPT DOCUMENT
console.log('Hello console!');

//CONSTANTEN
const header = document.querySelector('#firstHeader');
const menuButton = document.querySelector('#menuButton');
const exitButton = document.querySelector('#exitButton');
const menu = document.getElementById('hamburgermenu');
const scrollers = document.querySelectorAll(".scroller");
const video = document.querySelector('video');
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const scrollerInner = document.querySelector(".scroller");
const scrollerContent = Array.from(scrollerInner.children);
const closeButton = document.querySelector('#closeButton');
const formButton = document.querySelector('#inschrijfButton');
const formulier = document.querySelector('#inschrijvingsformulier');

//VARIABELEN
let lastScrollTop = 0;
let scrollFromTop;


//HAMBURGERMENU
//functie om menu te openen
function openMenu() {
  menu.style.display = "flex"; //zorgt dat de display van het menu op flex staat + zichtbaar maakt
  menuButton.setAttribute('aria-expanded', 'true'); //om toegankelijkheid te verbeteren
  menu.setAttribute('aria-hidden', 'false'); //menu is zichtbaar
  menu.querySelector('a, button').focus(); //de focus gaat naar het eerste item in het menu
}

//functie om menu te sluiten
function closeMenu() {
  menu.style.display = "none"; //zorgt dat de display van het menu op none staat + niet zichtbaar is 
  menuButton.setAttribute('aria-expanded', 'false'); //om toegankelijkheid te verbeteren
  menu.setAttribute('aria-hidden', 'true'); //menu is verborgen
  menuButton.focus(); //de focus gaat terug naar de menuknop
}

//toggle menu bij klikken op menubutton
menuButton.addEventListener('click', (e) => { //event-object
  e.preventDefault(); //standaardgedrag voorkomen knop, op juiste manier menu openen/sluiten wanneer je klikt
  if (menu.style.display === "flex") { //controleert of menu zichtbaar is
    closeMenu(); //sluit menu wanneer zichtbaar
  } else {
    openMenu(); //opent menu wanneer niet zichtbaar
  }
});

//sluit het menu bij klikken op de exitbutton
exitButton.addEventListener('click', (e) => {
  e.preventDefault(); //standaardgedrag voorkomen knop, op juiste manier menu openen/sluiten wanneer je klikt
  closeMenu(); //sluit het menu
});


//NAV BALK DIE ZICHTBAAR WORDT WANNEER JE NAAR BOVEN SCROLLT
//op basis van scrollgedrag
function scrollHide() {
  scrollFromTop = document.documentElement.scrollTop; //huidige scrollpositie van de pagina
  if (scrollFromTop > lastScrollTop) { //controleerd of naar beneden scrolt
    header.classList.remove("headerdown"); //class headerdown verwijderen om header te verbergen
    header.classList.add('headerup'); //class header toevoegen om header omhoog te schuiven
  } else if (scrollFromTop < 50) { //controleert of scrollpositie minder dan 50px is
    header.classList.remove("headerdown"); //verwijder class headerdown
    header.classList.add('headerup'); //class headerup toevoegen
  }
  else {
    header.classList.remove('headerup'); //verwijder class headerup om header te laten zien
    header.classList.add("headerdown"); //voeg class headerdown toe
  }
  lastScrollTop = scrollFromTop <= 0 ? 0 : scrollFromTop; //update lastScrollTop met huidige scrollpositie
}
//scroll-gebeurtenis koppelen aan functie om gedrag van header te regelen
window.onscroll = function () {
  scrollHide(); //roep scrolHide-functie aan bij scrollen
};

//VIDEO PAUZE EN PLAY
//bij klikken speel video af
playButton.addEventListener("click", function () {
  video.play(); //speelt video af
});
//bij klikken pauzeer video
pauseButton.addEventListener("click", function () {
  video.pause(); //pauzeert video
}); //eerst lukte het door alleen video.play() te gebruiken maar ik wou hem ook pauzeren en on click lukte niet dus ik heb buttons gemaakt en dan aan chatGPT voor de rest gevraagd om het te doen.

//AUTOMATISCHE CAROUSEL
//animatie toevoegen aan scrollers
function addAnimation() {
  scrollers.forEach((scroller) => { //elk scroller element in scrollers
    scroller.setAttribute("data-animated", true); //data-attribute toevoegen om aan te tonen dat animatie is toegevoegd

    //dupliceer elk item in scroller voor infinity scroll-effect
    scrollerContent.forEach((item) => { //voor elk item in de scroller
      const duplicatedItem = item.cloneNode(true); //dupliceer item
      duplicatedItem.setAttribute("aria-hidden", true); //toegankelijkheid, gedupliceerd item is verborgen
      scrollerInner.appendChild(duplicatedItem); //voegt gedupliceerde item toe aan interne scroller
    });
  });
}
//addAnimation wordt uitgevoerd na volledig laden van pagina
window.onload = function () {
  addAnimation();
};

//INSCHRIJVINGSFORMULIER VERBERGEN & WEERGEVEN
function openFormulier() {
  if (formulier.style.display == "none" || !formulier.style.display) { //controle of formulier verborgen is
    formulier.style.display = "flex"; //zet displaystijl op flex om form te tonen
  } else {
    formulier.style.display = "none"; //zet displaystijl op none om form niet zichtbaar te maken
  }
} //

formButton.addEventListener('click', openFormulier);
closeButton.addEventListener('click', openFormulier);