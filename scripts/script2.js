// JavaScript Document
console.log('Hello console!');

const verbergButton = document.getElementById("verbergButton");
const fieldset = document.getElementById("artikelOpties");
const quantityInputs = document.querySelectorAll('input[type="number"]');
const totalPriceElement = document.getElementById('totaalPrijs');

const checkboxes = document.querySelectorAll('.checkbox');
const rows = document.querySelectorAll('tr[data-item]');
const selecteerAllesButton = document.getElementById('allesSelecteren');
const deselecteerAllesButton = document.getElementById('allesDeselecteren');
const zoekButton = document.getElementById('zoekButton');

let state_fieldset = true;

//verbergen van filteropties
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
  } //met wat hulp van Mariska en het herbekijken van "inleiding programmeren vorig jaar"

//updaten van prijs wanneer aantal veranderd
function updateTotalPrice() {
    let total = 0;
  
    quantityInputs.forEach(input => {
      const quantity = parseInt(input.value);
      const price = parseFloat(input.getAttribute('data-price'));
      total += quantity * price;
    });
  
 //update de totale prijs in HTML
    totalPriceElement.textContent = `€ ${total.toFixed(2)}`;
  }
  
// Attach event listener to each quantity input
  quantityInputs.forEach(input => {
    input.addEventListener('input', updateTotalPrice);
  });
  
  // Initial calculation on page load
  updateTotalPrice();

//filteren van rijen in de tabel via de checkboxes
function filterTableRows() {
  const selectedValues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

rows.forEach(row => {
    const itemType = row.getAttribute('data-item');
    if (selectedValues.includes(itemType)) {
      row.style.display = ''; // Laat zien
    } else {
      row.style.display = 'none'; // Verberg
    }
  });
}

//alles selecteren
function selectAllCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}

//alles deselecteren
function deselectAllCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

verbergButton.addEventListener('click', verbergen_openen);
zoekButton.addEventListener('click', filterTableRows);
selecteerAllesButton.addEventListener('click', selectAllCheckboxes);
deselecteerAllesButton.addEventListener('click', deselectAllCheckboxes);