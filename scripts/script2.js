// JavaScript Document
console.log('Hello console!');

const verbergButton = document.getElementById("verbergButton");
const fieldset = document.getElementById("artikelOpties");
const quantityInputs = document.querySelectorAll('input[type="number"]'); //alle input type elementen met number worden opgeslagen in de constante. Meerdere invoervelden kunnen beheerd worden hiermee
const totalPriceElement = document.getElementById('totaalPrijs');

const checkboxes = document.querySelectorAll('.checkbox');
const rows = document.querySelectorAll('tr[data-item]'); //alle tabelrijen die data item hebben worden opgeslagen in de constante. Zo wordt de inhoud van de tabel gefilterd.
const selecteerAllesButton = document.getElementById('allesSelecteren');
const deselecteerAllesButton = document.getElementById('allesDeselecteren');
const zoekButton = document.getElementById('zoekButton');

let state_fieldset = true; //filteropties zichtbaar of niet dit kunnen bijhouden

//verbergen van filteropties
function verbergen_openen() {
    if (state_fieldset == true) { //de filteropties(fieldset) controle of het zichtbaar is
      fieldset.style.display = 'none'; //de fieldset stijl wordt verborgen
      state_fieldset = false; //betekent dat de filteropties nu verborgen zijn
      verbergButton.textContent = 'laten zien'; //tekst in verbergButton veranderd in laten zien, zo kan de fieldset weer zichtbaar worden
    } else {
      fieldset.style.display = ''; //reset naar de standaardweergave
      state_fieldset = true; //geeft aan dat filteropties zichtbaar zijn
      verbergButton.textContent = 'verbergen'; //nu is de verbergButton zichtbaar met de tekst verbergen
    }
  } //met wat hulp van Mariska en het herbekijken van "inleiding programmeren vorig jaar"

//updaten van prijs wanneer aantal veranderd
function updateTotalPrice() {
    let total = 0; //totaal is standaard 0 en kan veranderen van prijs
  
    quantityInputs.forEach(input => { //elk invoerveld
      const quantity = parseInt(input.value); //haalt huidige waarde van invoer op en veranderd het naar een geheel getal met parseInt
      const price = parseFloat(input.getAttribute('data-price')); //haalt data price op en converteert naar getal met parseFloat
      total += quantity * price;
    });
  
 //update de totale prijs in HTML
    totalPriceElement.textContent = `€ ${total.toFixed(2)}`; //altijd twee decimalen met een euro teken
  }
  
//elke quantity input krijgt een eventlistener
  quantityInputs.forEach(input => { //kijkt naar elke input voor quantityInputs
    input.addEventListener('input', updateTotalPrice); //
  });
  
  //initiële berekening wanneer pagina laadt
  updateTotalPrice(); //dit roept de functie aan wanneer de pagina voor het eerst laadt

//filteren van rijen in de tabel via de checkboxes
function filterTableRows() {
  const selectedValues = Array.from(checkboxes) //lijst aan checkboxes
    .filter(checkbox => checkbox.checked) //filtert de array voor checkboxes die checked zijn
    .map(checkbox => checkbox.value); //er wordt een nieuwe lijst gemaakt met de waarden van de checkboxes

rows.forEach(row => { //elke rij
    const itemType = row.getAttribute('data-item'); //data item attribuut wordt opgehaald van elke rij
    if (selectedValues.includes(itemType)) { //kijkt of huidige rij in de selectedvalues lijst zit
      row.style.display = ''; // Laat zien van standaard weergave
    } else {
      row.style.display = 'none'; // Verbergt anders de rij
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
//de hele functie is gevonden met chatGPT nadat ik het niet meer kon vinden na echt een hele dag zoeken.

verbergButton.addEventListener('click', verbergen_openen);
zoekButton.addEventListener('click', filterTableRows);
selecteerAllesButton.addEventListener('click', selectAllCheckboxes);
deselecteerAllesButton.addEventListener('click', deselectAllCheckboxes);