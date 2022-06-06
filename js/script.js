/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero 
di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo). 
*/

// variabile bottone generatore di biglietto
const generateButton = document.getElementById('data_generation');

// cattura input alla pressione del tasto Genera
generateButton.addEventListener('click', function () {
  const userFullName = document.getElementById('user_full_name').value;
  const userKm = parseInt(document.getElementById('trip_length').value);
  const prizeCategory = document.getElementById('tariff_category').value;
  console.log(userFullName);
  console.log(userKm);
  console.log(prizeCategory);

  // calcolo costo biglietto senza sconti
  let ticketFinalPrice = userKm * 0.21;

  // calcolo costo biglietto scontato
  if (prizeCategory === 'minorenne') {
    ticketFinalPrice *= 0.8;
  } else if (prizeCategory === 'over') {
    ticketFinalPrice *= 0.6;
  }
  console.log(`Il costo del biglietto è ${ticketFinalPrice.toFixed(2)} euro`);
});
