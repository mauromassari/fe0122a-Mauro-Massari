// var e let

var nome= "Filippo";
console.log(nome);

{
    let nome = "Angelo";
    console.log(nome);
}

{
    let nome = "Laura";
    console.log(nome);

    nome = "Giulio";
    console.log(nome);
}





    // var e const

    var cognome = "Tancredi";
    console.log(cognome);

        {
        const cognome = "Balocco";
        console.log(cognome);
        }

        {
            const cognome = "Totti";
            console.log(cognome);

        //   cognome = "Tedesco";
        //   console.log(cognome); 
        //   NON SE PO FA!!!!

        } 

    console.log(cognome);



            // var

            var frutta = "fragola";
            console.log(frutta);

            {
                var frutta = "banana";
                console.log(frutta);
            }

            console.log(frutta);



                    // ancora var e let

                    var utente = "Ciro";
                    console.log(utente);

                    {
                        let utente= "Carla";
                        console.log(utente);
                    }

                    console.log(utente);



        // --booleani

        var oggetto1 = "paletta";
        var oggetto2 = "scopa";

        var prima_comp = (oggetto1 == oggetto2); 

        console.log(prima_comp); //true

        console.log(!prima_comp); //false


        console.log(oggetto1==oggetto2 || oggetto1 == "paletta"); // or

        console.log(oggetto1==oggetto2 && oggetto1 == "paletta"); // and

        console.log(oggetto2 == "scopa" && oggetto1 == "paletta"); // and



//------ confronto

var numb1 = 76;

var numb2 = 54.3;

console.log(numb1 > numb2);

console.log(numb1 < numb2);

console.log(numb1 == numb2);



        // -- matematici

        var numb3 = 100;

        var numb4 = 40;

        var differenza = (numb3 -= numb4);
        console.log(differenza);

        console.log(numb3);                     // ora numb3 vale 40 e non più 100

        var differenza2= (numb4 - numb3);       // 40 - 60 = -20
        console.log (differenza2);
  

        var somma = numb3 + numb4;
        document.write(somma);

        document.getElementById("polinesia").innerHTML = somma;