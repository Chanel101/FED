// JavaScript Document
const header = document.querySelector('#firstHeader')
const menuButton = document.querySelector('#menuButton')
const exitButton = document.querySelector('#exitButton')
const menu = document.getElementById('hamburgermenu')
const scrollers = document.querySelectorAll(".scroller")

let lastScrollTop = 0;
let scrollFromTop;

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller");
    const scrollerContent = Array.from(scrollerInner.children);
  
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    })
  });
}


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

document.addEventListener("DOMContentLoaded", function() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});

menuButton.addEventListener('click', openMenu)
exitButton.addEventListener('click', openMenu)