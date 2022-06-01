
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




//Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const userKilometres = parseInt( prompt("Scrivi qui i chilometri da percorrere"));
console.log(userKilometres);
const userAge = parseInt( prompt("Scrivi qui l'età del passeggero"));
console.log(userAge);

//Moltiplicare il prezzo base del bilgietto (0.21 € al km) per il numero dei chilometri
let yourTicket = userKilometres * 0.21;
console.log(yourTicket);

//Se il passeggero è minorenne applicare lo sconto del 20%
//Se il passeggero è over 65 applicare lo sconto del 40%
if (userAge < 18)
yourTicket = yourTicket * 2 / 100;
else if (userAge > 65)
yourTicket = yourTicket * 4 / 100;
console.log(yourTicket);


//Output prezzo finale da stampare in pagina html approssimato a due numeri decimali dopo la virgola
document.getElementById('result').innerHTML = yourTicket;