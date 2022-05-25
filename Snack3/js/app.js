// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

let i = 0

while (i < 5) {
    let numeroInserito = parseInt(prompt("Inserisci un numerone oh bischero che non sei altro !"));

    somma += numeroInserito;

    i++;

}

console.log("Visto che sei bischero e non sai contare l'addizione te la faccio io: " + somma);