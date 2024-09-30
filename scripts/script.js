// JavaScript Document
console.log('Hello console!');

const header = document.querySelector('#firstHeader');
const menuButton = document.querySelector('#menuButton');
const exitButton = document.querySelector('#exitButton');
const menu = document.getElementById('hamburgermenu');
const scrollers = document.querySelectorAll(".scroller");
const video = document.querySelector('video');
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const verbergButton = document.getElementById("verbergButton");
const fieldset = document.getElementById("artikelOpties");
const quantityInputs = document.querySelectorAll('input[type="number"]');
const totalPriceElement = document.getElementById('totaalPrijs');

let lastScrollTop = 0;
let scrollFromTop;
let state_fieldset = true;

function verbergen_openen() {
  if (state_fieldset == true) {
    fieldset.style.display = 'none';
    state_fieldset = false;
    verbergButton.textContent = 'laten zien';
  } else {
    fieldset.style.display = '';
    state_fieldset = true;
    verbergButton.textContent = 'verbergen';
  }
}
verbergButton.addEventListener('click', verbergen_openen);

function updateTotalPrice() {
  let total = 0;

  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    const price = parseFloat(input.getAttribute('data-price'));
    total += quantity * price;
  });

  // Update the total price in the HTML
  totalPriceElement.textContent = `€ ${total.toFixed(2)}`;
}

// Attach event listener to each quantity input
quantityInputs.forEach(input => {
  input.addEventListener('input', updateTotalPrice);
});

// Initial calculation on page load
updateTotalPrice();

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector(".scroller");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function scrollHide() {
  scrollFromTop = document.documentElement.scrollTop;
  if (scrollFromTop > lastScrollTop) {
    header.classList.remove("headerdown");
    header.classList.add('headerup');
  } else if (scrollFromTop < 50) {
    header.classList.remove("headerdown");
    header.classList.add('headerup');
  }
  else {
    header.classList.remove('headerup');
    header.classList.add("headerdown");
  }
  lastScrollTop = scrollFromTop <= 0 ? 0 : scrollFromTop;
}
window.onscroll = function () {
  scrollHide(); 
};

function openMenu() {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

/*document.addEventListener("DOMContentLoaded", function () {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});*/


menuButton.addEventListener('click', openMenu);
exitButton.addEventListener('click', openMenu);
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);