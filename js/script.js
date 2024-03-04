// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Inserisci la tua etá"));
let prezzo = km * 0.21;
// testo che viene aggiunto nel caso in cui viene applicato uno sconto
let textSconto = "";

if (age < 18) {
    const sconto = 20;
    // calcolo lo sconto tovando direttamente 80% del prezzo e arrotondo i decimali
    prezzo = ((prezzo * (100 - sconto))/ 100).toFixed(2);
    textSconto= "scontato del "+sconto+"% ";
} else if (age >= 65) {
    const sconto = 40;
    prezzo = ((prezzo * (100 - sconto))/ 100).toFixed(2);
    textSconto= "scontato del "+sconto+"% ";100
}

console.log("Il prezzo del biglietto "+textSconto+"é di €"+ prezzo);
alert("Il prezzo del biglietto "+textSconto+"é di €"+ prezzo);
