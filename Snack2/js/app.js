//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
//Ogni volta che ne crei uno, stampalo.



let numeroN = parseInt(prompt("Inserisci un numero nell'array"));
let x = 0;

while (x < numeroN) {

    let arrayVuoto = []


    for (let i = 0; i < 10; i++) {

        let numeroCasuale = Math.floor(Math.random() * 100) + 1;

        arrayVuoto.push(numeroCasuale)

        
    }



    console.log(arrayVuoto);

    x++;
}


    