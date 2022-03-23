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

prendiTasto = (tasto) => document.getElementById("risultato").value += tasto.id;
 
//-----------------------


// provo a far sì che non si possa digitare più di un + alla volta, ma non funzona niente
/*
function doppioPlus(){

    var displayss = risultato.value;

    if (displayss == "++"){
        var nuovoDisp = risultato.value; 
        nuovoDisp = replace("++","+");

    }
    else{

    }
}


function doppioPlus(){

    var displayss = risultato.value;

    if (displayss += "++"){
        var nuovoDisp = risultato.value; 
        nuovoDisp = replace("++","+");

    }
    else{

    }
}





var displayss = risultato.value;

    if (displayss += "++"){
        var nuovoDisp = risultato.value; 
        nuovoDisp = replace("++","+");

    }
    else{

    }



var displayss = risultato.value;

    if (displayss = "++"){
        var nuovoDisp = risultato.value; 
        nuovoDisp = replace("++","+");

    }
    else{

    }
*/