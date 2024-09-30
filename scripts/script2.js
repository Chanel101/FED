// JavaScript Document
console.log('Hello console!');

const verbergButton = document.getElementById("verbergButton");
const fieldset = document.getElementById("artikelOpties");
const quantityInputs = document.querySelectorAll('input[type="number"]');
const totalPriceElement = document.getElementById('totaalPrijs');

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


  verbergButton.addEventListener('click', verbergen_openen);