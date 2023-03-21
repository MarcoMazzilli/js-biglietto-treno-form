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
if (discount === "mineronne"){
  prezzoNetto = prezzoLordo*= 1 -(discountUnder / 100);
}else if (discount === "over-65"){
  prezzoNetto = prezzoLordo*= 1 -(discountOver / 100);
}else {
  prezzoNetto = prezzoLordo;
}
prezzoNetto = prezzoNetto.toFixed(2)

console.log('Prezzo al quale è stato applicato lo sconto -->', prezzoNetto);
})
