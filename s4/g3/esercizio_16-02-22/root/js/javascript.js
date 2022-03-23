
// Dovrai impostare una funzione che calcola un range di anni (puoi utilizzare una sottrazione)
var differenza =  function eta(anno_corrente, anno_nascita){
                        return console.log (anno_corrente - anno_nascita);}

differenza(2022, 1953);


// Imposta una funzione freccia e invocala, mostra un output
eta = (anno_corrente, anno_nascita) => alert (anno_corrente - anno_nascita);

eta (2022, 1952);


// Imposta una funzione freccia e invocala, mostra un output (inserita in una variabile)
var calcolo = eta1 = (anno_corrente, anno_nascita) => console.log (anno_corrente - anno_nascita);

calcolo (2022, 1960);


// Definisci una funzione all’interno di un’altra funzione
function operazioni () {
    var num = 20;

    function somma () {
        console.log (num + num);
    }

    return somma();
}
                  
operazioni ();


// Utilizza gli operatori che conosci, in particolare quelli di comparazione

var x1 = 10;
var x2 = "10";
var x3 = "Cassandra";
var x4 = "Cassandra";

document.write ((x1 == x2) + "<br>");           // true

document.write ((x1 === x2) + "<br>");         // false

document.write ((x3 === x4) + "<br>");         // true


document.write ((x1 != x2) + "<br>");           // false

document.write ((x1 !== x2) + "<br>");           // true


//-----------------------------------------

var y1 = 120;
var y2 = 230;

document.getElementById("comp").innerHTML = y1 >= y2;



// operatore ternario

gradi = 10;
var grappa = (gradi > 9) ? "Bevi" : "Prendi una vodka";

document.write(grappa);




