
//RICORDATI DI STAMPARE GLI ARRAY IN UN ALTRO ARRAY PER SALVARE I DATI

const numeroScelto = parseInt(prompt("Inserisci un numero"));

const arrayGenerati = [];

while(arrayGenerati.length < numeroScelto) {

    const nuovoArray = [];

    while (nuovoArray.length < 10) {

        const numeroCasuale = Math.floor(Math.random() * 100) + 1;

        if (!nuovoArray.includes(numeroCasuale)) {

            nuovoArray.push(numeroCasuale);
        }
    }

    arrayGenerati.push(nuovoArray);
}

console.log(arrayGenerati);