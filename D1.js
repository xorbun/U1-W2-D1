/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//String: tutti i caratteri 
//number: numeri con cui poter svolgere le varie operazioni
//boolean: vero o falso
//undefined: una variabile non ha un valore assegnato;
//null: assenza intenzionale di un valore. è possibile assegnargli un valore a patto che rispetti il suo tipo originale;

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
 let firstName="bruno";
 console.log(firstName);
 const firstName1="bruno";
 
 
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = (12+20);
console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
firstName="capobianco";
console.log(firstName);
//firstName1="capobianco";
console.log("impossibile cambiare il valore della costante. codice errore" + " " + "D1.js:54 Uncaught TypeError: Assignment to constant variable");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let result= (4 - x);
console.log(result);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="john";
let name2="John";
//console.log (!(name1 === name2));
if (!(name1 === name2))
{
  console.log("le due stringhe erano diverse." + " " + "ora invece" + " " + (name1===name2.toLocaleLowerCase()));
}
else
{
  console.log("le due stringhe sono uguali", name1===name2);
}

