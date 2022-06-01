
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//Chiedere all'utente 
//Moltiplicare il prezzo base del bilgietto (0.21 € al km) per il numero dei kilometri
//Se il passeggero è minorenne applicare lo sconto del 20%
//Se il passeggero è over 65 applicare lo sconto del 40%
//Output prezzo finale da stampare in pagina html approssimato a due numeri decimali dopo la virgola

//Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const userKilometres = prompt("Scrivi qui i chilometri da percorrere");
const userAge = prompt("Scrivi qui l'età del passeggero");

//Moltiplicare il prezzo base del bilgietto (0.21 € al km) per il numero dei chilometri
let baseTicket = userKilometres * 0.21 €;
console.log(baseTicket);





//Stampo il risultato in pagina
//document.getElementById('result').innerHTML = yourTicket;