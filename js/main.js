//INIZIALIZZAZIONE COSTANTI TRAMITE PROMPT ALL'UTENTE
const resultElement = document.getElementById("pwdgen");

const finalNumber = "23";
console.log(finalNumber);

const nome = prompt("Qual è il tuo nome?", "Antonio");
console.log(nome);

const surname = prompt("Qual è il tuo cognome?", "Di Bari");
console.log(surname);

const color = prompt("Qual è il tuo colore preferito?", "Rosso");
console.log(color);

//CREAZIONE DELLA PWD IN UNA VARIABILE MEDIANTE CONCATENAZIONE DI COSTANTI
let password = nome + surname + color + finalNumber;
console.log(password);

//GESTIONE DEL MAIUSCOLO
password = password.toLowerCase();
console.log(password);

//GESTIONE NOME, COGNOME E COLORE DA PIU' DI UNA PAROLA
password = password.split(" ").join("");
console.log(password);

//STAMPA IN OUTPUT DELLA PWD GENERATA TRAMITE ELEMENTO HMTL
resultElement.innerText = "La tua password generata è: " + password;
