//Crea un array vuoto 
//e chiedi all’utente un numero da inserire nell’array.
//Continua a chiedere i numeri all’utente
//e a inserirli nell’array
//fino a quando la somma degli elementi è minore di 50.

const arrayVuoto = [];

let somma = 0;

while (somma < 50) {
    let numeroInserito = prompt("Inserisci un numero nell'array");

    numeroInserito = parseInt(numeroInserito);

    somma += numeroInserito

    arrayVuoto.push(numeroInserito)

}

console.log(arrayVuoto);