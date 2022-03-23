var oggetto = {               // l'oggetto è una lista di propietà
    propieta: "valore1",     // propieta con relativo valore
    propieta: function() {}, //questa riga è un metodo, quindi propieta + function = metodo
    propieta: {
        subPropieta1: 1,
        sunPropieta2:"a",
    }
}

oggetto.propieta.sunPropieta2 // per pescare all'interno della mia variabile oggetto

//----------------------------

const oggetto1 = {
    propieta: "valore1",     // propieta con relativo valore
    propieta: function() {}, //questa riga è un metodo, quindi propieta + function = metodo
    propieta: {
        subPropieta1: 1,
        sunPropieta2:"a",
    }
}

oggetto1.propieta.sunPropieta2 // per pescare all'interno della mia variabile oggetto

oggetto1.propieta.sunPropieta2 = 1; // posso modificare le proprieta e subpropietà interne

// oggetto1 = [];  Ma nn posso modificare la natura della variabile, ovvero passare da "oggetto" ad "arrey"

// var x = {};  --> oggetto
// var y = []; -->  arrey

//--------------------------------------------

    // -- oggetto pizza
    var pizza = {
        gusto:  "margherita",
        prezzo: "5",
        tipo:   "napoletano"
    }

            // --creo un algoritmo che genera oggetti pizza col costruttore Pizza
            function Pizza (g, p, t){
                this.gusto = g;
                this.prezzo = p;
                this.tipo = t;
            }

            console.log (Pizza);

                    // creo una nuova istanza dell'oggetto pizza, variante diavola
                    var diavola = new Pizza ('diavola', '6', 'napoletana')
                    console.log(diavola);

                    // creo una nuova istanza dell'oggetto pizza, variante margherita
                    var margherita = new Pizza ('margherita', '5', 'napoletana')
                    console.log(margherita);