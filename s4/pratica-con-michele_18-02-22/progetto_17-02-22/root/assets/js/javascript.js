/*
// Creo il tasto RESET
function resetCalcolatrice(){

    // inserisco nella let risultato l'elemento html cn id risultato
    let risultato = document.getElementById("risultato")

    // inserisco nella proprietà value dell'elemento risultato una stringa vuola
    risultato.value = ''
}
*/

/*
// Ri-Creo il tasto RESET
function resetCalcolatrice(){

    // inserisco nella proprietà value dell'elemento risultato una stringa vuola
    document.getElementById("risultato").value = "";
}
*/

// Ri-Creo il tasto RESET con una funzione arrow
resetCalcolatrice = () => document.getElementById("risultato").value = "";


//---------------------------------------

/*
// Creo il tasto uguale/totale
function totale(){

    // inserisco all'interno della let res l'elemento html con id risultato
    let res = document.getElementById("risultato")

    // nella let totale inserisco la proprietà value della let res, 
    // ossia dell'elemento html con id risultato, dopo averlo trasformato in js con eval
    let totale = eval(res.value)

    // inserisco nella let totale la proprietà value di res
    res.value = totale
}
*/

/*
// Ri-Creo il tasto uguale/totale
function totale(){

    // inserisco nella let totale la proprietà value dell'id risultato, dopo averla trasf in js
    // qui trasformo le stringh in numeri e faccio operazioni matematiche
    let totale = eval(document.getElementById("risultato").value);

    //inserisco nella proprietà value dell'elemento risultato nella let totale
    // dopo aver fatto l'operazione, mando in output il risultato della stessa 
    document.getElementById("risultato").value = totale
} */


/*
// Ri-Creo il tasto uguale/totale in meno codice
function totale(){

    // inserisco nella let totale la proprietà value dell'id risultato, dopo averla trasf in js
    // qui trasformo le stringh in numeri e faccio operazioni matematiche
    document.getElementById("risultato").value = eval(document.getElementById("risultato").value);
}
*/


// Ri-Creo il tasto uguale/totale in una funzione arrow
totale = () => document.getElementById("risultato").value = eval(document.getElementById("risultato").value);



//-----------------------------------------------------
/*
// Creo i pulsanti della calcolatrice
function prendiTasto(tasto){

    // inserisco nella let risultato l'elemento html con id risultato
    let risultato = document.getElementById("risultato")

    // inserisco nella let num l'id del parametro del pulsante premuto
    let num = tasto.id;

    // aggiungo/sostituisco la proprietà value dell'elemento risultato con 
    // l'id del button premuto
    risultato.value += num 
}
*/

/*
//Ri-Creo i pulsanti della calcolatrice
function prendiTasto(tasto){

    // aggiungo/sostituisco la proprietà value dell'elemento risultato con
    // l'id del button premuto
    document.getElementById("risultato").value += tasto.id;
} */


// Ri-Creo i pulsanti della calcolatrice in una funzione arrow

// prendiTasto = (tasto) => document.getElementById("risultato").value += tasto.id;
 
//-----------------------




// Ri-creo la funzione per digitare i tasti ma con integrata la funzione che bocca l'inserimento di più di un segno
function prendiTasto(tasto){
    let risultato = document.getElementById("risultato");
    let num = tasto.id;


    // Creo la funzione che mi dice se è presente un segno
    function segni(s){
        var simboli = [".", "+", "-", "/", "*"]
        if (simboli.includes(s)){
            return true
        }
        else {
            return false
        }
    }
    
    // se all'interno della variabile num non ci sono segni
    if (!segni(num)){
        risultato.value += num //permettimi di premere i tasti
    }
    else{
        var ultimoCarattere = risultato.value[risultato.value.length -1]; //altrimenti prendi l'ultimo carattere

        if(!segni(ultimoCarattere)){    // se questo non è un segno, permettimi di pigiare qualsiasi tasto
            risultato.value += num;
        }
        else{
            risultato.value = risultato.value.replace(ultimoCarattere, num); // altrimenti sostituici l'ultimo carattere con dei numeri
        }

    }
}



