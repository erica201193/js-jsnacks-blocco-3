// In un array sono contenuti i nomi degli invitati
// alla festa del grande Gatsby,
// chiedi all’utente il suo nome 
// e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.


const listaInvitati = ["MariaAntonietta", "Giuseppina", "Ambrogio", "Oreste", "Augusto", "Mafalda", "Luisella"]

let nomeUtente;
let x = 0;


do {
    let nomeUtente = prompt("Please insert your name to access at the Gatsby Party of the Year");

    let personaAmmessa = false;

    for (let i = 0; i < listaInvitati.length; i++) {
        if (nomeUtente = listaInvitati[i]) {
            personaAmmessa = true;
        }

        if (personaAmmessa) {
            alert("Yeah! Puoi partecipare alla fiesta!")
            console.log("ok");
        } 

        
    }

    // if (personaAmmessa) {
    //     alert("Yeah! Puoi partecipare alla fiesta!")
    // } 

    // if (personaAmmessa = false) {
    //     alert("You are not invited! Go home")
    // }

    x++


} while (nomeUtente === !undefined);