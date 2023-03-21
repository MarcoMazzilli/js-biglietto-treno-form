//Random number generator Carrozza e Cp code
let carrozzaNumber = Math.floor(Math.random() * 21);
console.log('numero carrozza-->',carrozzaNumber);

let cpCode = Math.floor(Math.random() * 1001) + 1000;
console.log('Cp Code-->',cpCode);

//Dati in possesso
const prezzoAlKm = 0.21;
const discountUnder = 20;
const discountOver = 40;

//Intercetto il bottone "submit" e lo assegno ad una variabile
const submit = document.getElementById('submitInput')
console.log(submit)

//Al click questo bottone recupera il value degli input e li salva in una var.
submit.addEventListener('click', function(){
  const name = document.getElementById("nameInput").value;
  const distance = document.getElementById('distanceInput').value;
  const discount = document.getElementById('select').value;
  console.log(name , distance, discount);

//Calcolo costo biglietto
let prezzoLordo = distance * prezzoAlKm;
console.log ( 'Prezzo del biglietto non scontato -->', prezzoLordo);

//Calolo la percentuale di sconto e arrotondo la cifra
if (discount === "minorenne"){
  prezzoNetto = prezzoLordo*= 1 -(discountUnder / 100);
  document.getElementById('tipoOfferta').innerHTML = "\'Sconto giovani\'";
}else if (discount === "over-65"){
  prezzoNetto = prezzoLordo*= 1 -(discountOver / 100);
  document.getElementById('tipoOfferta').innerHTML = "\'Diventare grandi\'";
}else {
  prezzoNetto = prezzoLordo;
  document.getElementById('tipoOfferta').innerHTML = "\'Viaggia Sicuro\'";
}
//arrotondo la cifra prima di mandarla in output
prezzoNetto = prezzoNetto.toFixed(2)
console.log('Prezzo al quale è stato applicato lo sconto -->', prezzoNetto);

//Compilo i campi con l'innerHTML
document.getElementById('nomeOutput').innerHTML = name;
document.getElementById('carrozzaOutput').innerHTML = " " + carrozzaNumber;
document.getElementById('codiceCpOutput').innerHTML = " " + cpCode;
document.getElementById('prezzoNettoOutput').innerHTML = '' + prezzoNetto;

//Specifico il tipo di offerta all'interno del biglietto
})
