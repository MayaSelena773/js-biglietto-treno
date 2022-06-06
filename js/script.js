
//Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
const userKilometres = parseInt( prompt("Scrivi qui i chilometri da percorrere"));
const userAge = parseInt( prompt("Scrivi qui l'età del passeggero"));

//Moltiplicare il prezzo base del bilgietto (0.21 € al km) per il numero dei chilometri
let yourTicket = userKilometres * 0.21;

//Se il passeggero è minorenne applicare lo sconto del 20%
//Se il passeggero è over 65 applicare lo sconto del 40%
if (userAge < 18)
yourTicket = yourTicket - (yourTicket * 2 / 100);
else if (userAge > 65)
yourTicket = yourTicket - (yourTicket * 4 / 100);


//Output prezzo finale da stampare in pagina html approssimato a due numeri decimali dopo la virgola
document.getElementById('result').innerHTML = yourTicket.toFixed(2);