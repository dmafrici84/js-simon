// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// creo un array con 5 numeri casuali univoci
var num = 5;
var arrayNumCasuli = [];
for (var i = 0; i < num; i++) {
  arrayNumCasuli.push(getRandomIntInclusive(1, 100));
  for (var j = 0; (j < num) && (j != i); j++) {
    if(arrayNumCasuli[i] == arrayNumCasuli[j]){
      arrayNumCasuli.pop();
      i--;
    }
  }
}
console.log("arrayNumCasuli",arrayNumCasuli);

// Un alert i 5 numeri casuali univoci.
alert("Memorizza i seguenti 5 numeri: " + arrayNumCasuli + ". Appena ti senti pronto clicca ok");

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
var tempoMax = 30;
var interval = setInterval(function() {

  document.getElementById("numeri").innerHTML = tempoMax;
  console.log(tempoMax);

  // quando scadono i 30s
  if (tempoMax == 0 ) {

    // interrompo countdown
    clearInterval(interval);

    // chiedo all'utente di insrire, con un prompt alla volta,i numeri che ha visto precedentemente.
    var arrayNumUtente = [];
    for (var i = 0; i < num; i++) {

      var numUtente = parseInt(prompt("Inserisci un numero"));
      console.log("numUtente",numUtente);

      // verifico che il numero sia corretto
      var numUtente1 = numeroValido(numUtente);
      console.log("numUtetnte1",numUtente1);

      // se è il munero è corretto
      if (numUtente1) {

        // inserisco il numero utente in un array
        arrayNumUtente.push(numUtente);
        console.log(arrayNumUtente[i]);

        // verifico che l'utente non inserisca 2 o più volte lo stesso numero
        for (var j = 0; (j < num) && (j != i); j++) {

          if(arrayNumUtente[i] == arrayNumUtente[j]){
            alert("attenzione il numero è stato già inserito");
            arrayNumUtente.pop();
            i--;
          }

        }
        // se il numero non è corretto
      } else {

      alert("Attenzione il valore inserito non è corretto");
      i--;

      }

    }
    console.log(arrayNumUtente);

    //  il software dice quanti e quali dei numeri da indovinare sono stati individuati
    var numIndovinati  = [];
    var punti = 0;
    for (i = 0; i < arrayNumCasuli.length; i++) {
      for (var j = 0; j < arrayNumUtente.length; j++) {
        if (arrayNumCasuli[i] == arrayNumUtente[j] ) {
          punti++;
          numIndovinati.push(arrayNumUtente[j]);
        }
      }
    }
    document.getElementById("numeri").innerHTML = "Hai indovinato " + punti + " numeri: " + numIndovinati;
    console.log("punti",punti);
    console.log(numIndovinati);

    // se l'utente non indovina nessun numero
    if (punti == 0) {
      document.getElementById("numeri").innerHTML = "Mi dispiace non hai indovinato nessun numero";
    }

  } else {

    tempoMax--;

  }

}, 1000);




// FUNZIONI

  // FUNZIONE CHE GENERA IN MODO CASUALE UN NUMERO
  function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    var numRand = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
    return numRand;

  }

  // FUNZIONE CHE DETERMINA SE IL DATO INSERITO E' UN NUMERO
  function numeroValido(num) {

    if (!(isNaN(num)) && (num != "")) {
      return true;
    } else {
      return false;
    }

  }
