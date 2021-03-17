/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


//creo un oggetto studenti
var studente = {
nome: "Ennio",
cognome: "Annio",
eta: 19
};

//Stampo tutte le proprietà dell'oggetto

for ( var key in studente) {
 console.log(studente[key]);
}

//creo array di oggetti 

var objStudenti = [
  {
    nome: "Anna",
    cognome: "Pannocchia",
    eta: 21
  },

  {
    nome: "Fabbio",
    cognome: "Di Ninno",
    eta: 23
  },

  {
    nome: "Ivo",
    cognome: "Avido",
    eta: 22
  }
]

//Ciclo l'array e stampo nome e cognome

for (var i = 0; i < objStudenti.length; i++) {
  console.log(objStudenti[i].nome + " " + objStudenti[i].cognome);
  
}

//Chiedo all'utente di inserire nome, cognome e età

var nuovoStudente = {};

var userName = prompt('Inserisci il nome');
var userSurname = prompt('Inserisci il cognome');
var userAge = parseInt(prompt("Inserisci l'età"));
//Inserisco i dati nell'oggetto

nuovoStudente.nome = userName;
nuovoStudente.cognome = userSurname;
nuovoStudente.eta = userAge;

//Inserisco l'oggetto dentro l'array
objStudenti.push(nuovoStudente);

console.log(objStudenti);

