// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
//
// Infine scrivi sulla pagina nomecognomecolorepreferito20

// chiedo all'utente il suo nome
var nome = prompt('Inserisci il tuo nome');

// chiedo all'utente il suo cognome
var cognome = prompt('Inserisci il tuo cognome');

// chiedo all'utente il suo colore preferito
var colore = prompt('Inserisci il tuo colore preferito');

// console.log(nome);
// console.log(cognome);
// console.log(colore);

// concateno le 3 informazioni inserite dall'utente in una nuova variabile
var password = nome + cognome + colore + '20';

// console.log(password);

document.getElementById('password-generata').innerHTML = password;
