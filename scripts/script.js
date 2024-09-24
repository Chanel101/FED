// JavaScript Document
const header = document.querySelector('#firstHeader')
const menuButton = document.querySelector('#menuButton')
const exitButton = document.querySelector('#exitButton')
const menu = document.getElementById('hamburgermenu')
let lastScrollTop = 0;
let scrollFromTop;

function scrollHide() {
  scrollFromTop = document.documentElement.scrollTop;
  if (scrollFromTop > lastScrollTop) {
    header.classList.remove("headerdown");
    header.classList.add('headerup');
  } else if(scrollFromTop < 50){
    header.classList.remove("headerdown");
    header.classList.add('headerup');
  }
  else {
    header.classList.remove('headerup');
    header.classList.add("headerdown");
  }
  lastScrollTop = scrollFromTop <= 0 ? 0 : scrollFromTop;
}
window.onscroll = function(){scrollHide()};

function openMenu(){
  if(menu.style.display == "none"){
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

menuButton.addEventListener('click', openMenu)
exitButton.addEventListener('click', openMenu)