# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Chanel Vercaemst (vervangen door jouw naam)

  #### Je startniveau:
  blauwe piste met een beetje rode piste (kies uit zwart, rood óf blauw)

  #### Je focus:
  surface plane (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp: https://www.pairidaiza.eu/nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/PairiDaiza_Home.png" width="375px" alt="De homepagina waar je de meest algemene informatie kan terugvinden.">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/PairiDaiza_cadeaubonnen.png" width="375px" alt="De cadeaubonnen pagina heeft bijna helemaal geen Pairi Daiza huisstijl. Dat wil ik graag veranderen en beter maken.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Eigen website (Pairi Daiza)
  - Verschillende buttons hebben niet een betekenis gekregen, dus weet de gebruiker niet wat de button voor functie heeft in de navigatie.
  - De galerij met slider krijgt geen duidelijke naam en de gebruiker weet niet dat het een galerij is waar je door kan schuiven naar rechts.
  - Heel veel afbeeldingen worden zo maar overgeslagen.
  - De afbeeldingen hebben ook geen uitleg over wat er te zien is op de afbeeldingen.
  - Het is best wel lastig met de sneltoetsen te navigeren om alles te horen.
  - De structuur van de website via de screenreader klopt wel van boven naar beneden.
 <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst_Pagina_1.png" alt="WCAG pagina 1">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst_Pagina_2.png" alt="WCAG pagina 2">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst_Pagina_3.png" alt="WCAG pagina 3">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst_Pagina_4.png" alt="WCAG pagina 4">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst_Pagina_5.png" alt="WCAG pagina 5">


Ingmar's website (Hema)
  - De navigatie klopt maar de reader gaat eerst naar het logo terwijl er nog linkjes boven staan.
  - Wanneer de reader bij het winkelmandje komt begint hij gelijk over het inloggen, terwijl dat nog nergens te zien is op de website.
  - Hij raakt helemaal in de war bij het begin.
  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets_1.jpg" width="375px" alt="breakdown van de hele pagina">
  <img src="readme-images/breakdownschets_2.jpg" width="375px" alt="breakdown van de hele pagina">
  <img src="readme-images/breakdownschets_3.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/navigatie_breakdownschets.png" width="375px" alt="breakdown van een dynamisch deel, de navigatie met en hamburgermenu">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/inschrijfformulier_breakdownschets.png" width="375px" alt="breakdown van het inschrijfformulier">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het ging vooral lastig met de h1 en h2 aanduiden, want ik helemaal naar de h6.
  Ik weet niet waarom ik zo veel lijstjes heb.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |
    Hamburgermenu

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - hamburgermenu, zeker de oefening doen die het meest op je eigen menu lijkt.
  - goed opgebouwde semantische html, goede omkadering van html doet al het meeste.
  - toegankelijkheidstest mag uitgebreider.
  - alles uitklappen en dat in de html zetten.
  - Niet alles hoeft in lijstjes.
  - H1 mag toegevoegd worden, je kan display none. Je kan hem in een boxje. paginatitel is wel fijn voor de screenreader.
  - H2 kunnen apart gestyled worden met class.
  - H3 is alleen wanneer in h2 er weer een ander onderdeel.
  - Classes gebruiken waar het logisch, correct is en waar je niks anders kan gebruiken.
  - img:nth of type (odd/even) kan ook voor even en oneven img, ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Verschillende css die ik doe, gaat ook op andere h2 bijvoorbeeld en dan moet ik die een class geven maar soms veranderde die andere h2 toch niet en dat zorgde best wel voor veel tijd verlies.

  Het maken van het menu onder de video was best wel een uitdaging waar ik toch meer dan een half uur aan heb gezeten samen met Diego. 

  Dingen zoals de nav ging best oke, alleen heb ik een dropdown menu die ik nog moet stylen.

  De footer ging ook best goed, ik moet wel nog iedere details stylen.

  Daarnaast heb ik 3 verschillende carousels en de tweede ging goed, maar de eerste heeft bolletjes onder de carousel maar dat wil maar niet lukken en ik weet echt niet waar ik een goede handleiding hiervoor kan vinden.
  Daarnaast is de derde carousel een automatische die in een loop doorloopt maar dat kan ik ook niet vinden.

  Ik moet ook nog het hamburgermenu maken.

  Ik moet nog de css doen voor de tweede pagina maar ik denk dat dat makkelijker zal verlopen. Het zal eerder de animatie zijn voor het winkelmandje waar ik mee ga zitten.
  


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - css clip-path maker voor hamburgermenu vanuit een hoek.
  - main een class geven zo om makkelijk te stylen voor de tweede pagina.
  - een tutorial gekregen om mijn carousel automatisch te maken van David.
  - 

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  ik heb alles ingevuld in de pdf met bevindingen.
  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst _eigenwebsite_Pagina_1.png" alt="WCAG pagina 1">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst _eigenwebsite_Pagina_2.png" alt="WCAG pagina 2">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst _eigenwebsite_Pagina_3.png" alt="WCAG pagina 3">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst _eigenwebsite_Pagina_4.png" alt="WCAG pagina 4">

  <img src="readme-images/FED 24-25 - Blok 1 - WCAG checklist_ChanelVercaemst _eigenwebsite_Pagina_5.png" alt="WCAG pagina 5">
</details>



## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  1. Bij de footer is er een vierkant waar je op 4 verschillende links kan klikken. Het lukt me niet met grid om de pijl en de tekst op de juiste plaats te zetten.
  <img src="/readme-images/footer_vierkant.png" alt="klikbare elementen in een vierkant">
  2. De automatische carousel gaat automatisch maar de list items willen niet dupliceren en zo in loop afspelen en ook de carousel neemt meer dan de grootte van het scherm in.
   <img src="/readme-images/automatische_carousel.png" alt="carousel die in loop blijft doorspelen">
  3. ik heb ook nog een inschrijvingsformulier die ik moet maken die ik bijna vergeten was.
  4. de tweede pagina moet ik nog de nav in de footer aanpassen en het winkelmandje een animatie geven wanneer iets toevoegd aan je winkelmandje.
  5. light en dark mode moet ik nog toevoegen.
  6. Ik ga ook nog aan de video toevoegen dat er kan gekozen worden om de video te pauzeren.
  7. de reduced motion wil ik ook nog toevoegen aan mijn website.
  8. Als laatste heb ik nog de eerste carousel die bolletjes moet hebben eronder om te kunnen klikken naar een afbeelding in de carousel.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - animatie afmaken dus bv. als er iets in het winkelmandje komt dat de button iets doet zoals met :focus, ...
  - focus eerst op de makkelijke dingen en wanneer ik tijd heb kan ik verder doen met de carousel.
  - ook goed mijn bronnen bijhouden
  - surface plane opties goed bekijken en wat ik ga doen kiezen.

</details>



## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/uikomst_pagina1_ChanelVercaemst_Pairi Daiza.png" width="375px" alt="uitkomst opdracht 1, pagina 1">
  <img src="readme-images/uitkomst_pagina2_ChanelVercaemst_PairiDaiza.png" width="375px" alt="uitkomst opdracht 1, pagina 2">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes
  Ik ben blij dat toen mijn hamburgermenu werkte dat ik wist hoe ik mijn inschrijvingsformulier moest doen.
  Het was ook interessant om te leren dat je veel toegankelijker kan zijn door aria-label te gebruiken.
  Ik vond het ook interessant om te leren over filter systemen ook al was het best wel moeilijk om daarvoor code te vinden die ik begrijp want het wordt als snel ingewikkeld.
  Daarnaast vond het het ook cool dat het scrollen met de navigatiebalk ook wel kan met niet veel lijntjes code.
  Ook de automatische carousel was interessant ook al wil de loop dat oneindig loopt niet werken de animatie werkt wel!

  <img src="readme-images/inschrijvingsformulier.png" width="375px" alt="inschrijfformulier">
  <img src="readme-images/filteropties.png" width="375px" alt="filteropties">
  <img src="readme-images/scrollnavbar.png" width="375px" alt="navbar komt tevoorschijn bij het naar boven scrollen">
  <img src="readme-images/automatischecarousel.png" width="375px" alt="carousel die automatisch afspeelt">

  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Ik had graag willen hebben dat bij mijn inschrijfformulier dat ik daar een foutmelding kreeg wanneer iets niet goed was ingevuld maar dat lukte me uiteindelijk niet meer. En ik had graag ook nog een pop-up willen maken wanneer de inschrijving gelukt is. Maar daar ben ik niet meer aan toe gekomen.

  <img src="readme-images/inschrijvingsformulier.png" width="375px" alt="er gebeurt niks wanneer ik het formulier invul.">
</details>


## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  1. het dropdown menu waar je kan kiezen tussen verschillende talen enzovoort, heb dit gevonden door de developer tools van Mozilla Firefox. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select 
  2. De checkbox heb ik ook gevonden in de developer tools van Mozilla Firefox. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox 
  3. Het menu onder de video heb ik hulp bij gekregen van Diego om hier te werken met grid.
  4. Voor de carousel puur in css heb ik deze code gevolgd. https://www.nieknijland.nl/blog/make-a-responsive-carousel-with-just-css
  5. Voor de gradient op de tijger foto heb ik hulp gekregen van de studentenassistent. https://codepen.io/Dave-deo/pen/rNEEEWr?editors=1100 
  6. Voor het stylen van de details en summary in de footer heb ik deze code gebruikt. https://www.sitepoint.com/style-html-details-element/ 
  7.  Hamburgermenu laten verschijnen en verdwijnen via javascript. https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
  8. https://youtu.be/iLmBy-HKIAw?si=-56qVNNYvvBA1AkZ deze tutorial heb ik gevolgd voor de automatische carousel.
  9. voor de play en pauze button voor de video heb ik deze website gebruikt om me daarbij te helpen. https://www.geeksforgeeks.org/how-to-play-pause-video-using-jquery/
  10. Voor de het filter systeem met de checkboxes en dat dan bepaalde verdwijnen in de tabel heb ik via chatGPT gedaan, na zeker een hele dag had ik het de dag erna eindelijk gevonden.    Met deze prompt: "ik wil voor mijn pagina dat wanneer ik een checkbox aanklik dat alleen die tickets te zien zijn. dat wil ik doen met html css en javascript."
  11. de prijs wou niet up to date zijn wanneer ik er een ticket bij deed. Met de prompt: "wanneer iemand op de input type number klikt moet het bedrag onderaan naast de button veranderen.  hoe doe ik dat met javascript?"
  12. de screenreader wou mijn hamburgermenu niet lezen en ik heb dit proberen toegankelijker te maken met chatGPT. Met deze prompt:"ik wil dat de screenreader het hamburgermenu leest wnr die opengeplakt is en niet de andere nav's eerst, met html css en javascript." 
  13. ik had graag de video willen pauzeren en afspelen maar wanneer de gebruiker dat zelf wil maar dat ging niet toen iemand op de video gewoon wou klikken dus heb ik buttons gemaakt om het wat makkelijker te maken. Prompt: "ik wil graag dat je de video kan pauzeren en laten afspelen wanneer de gebruiker dat wil in javascript." ChatGPT
  14. voor light en dark mode kreeg ik veel errors toen ik de code uit de les gebruikte. Hiervoor heb ik aan ChatGPT gevraagd hoe ik dit kon oplossen. "De prompt: wrm krijg ik heel veel error meldingen bij al mijn var voro de kleuren ?"
</details>