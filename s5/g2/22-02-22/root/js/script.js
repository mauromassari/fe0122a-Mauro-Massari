
//Imposto il bottone che genera il mio budget iniziale
let generaBudget = document.querySelector("#gen-bud");
 
    generaBudget.addEventListener("click", function(){
        let laSOrte = 4000
        let budget = document.querySelector("#budIniz");
        
        budget.value = laSOrte;
    })
    

//Imposto il bottone che genera i costi
let pulsanteCosti = document.querySelector("#butt-costi");

let listaCosti = document.querySelector("ul");
let arrayCosti = [];

    pulsanteCosti.addEventListener("click", function(){
        
        let costi = document.createElement("li")
        let spesa = Math.floor(Math.random()*50)

        let totSpese = document.querySelector("#totCosti");
        let budget = document.querySelector("#budIniz").value;

        let budgetResiduo = document.querySelector("#res");

        let y = Number(budgetResiduo.value)

        if(y>=0){
            costi.innerHTML += spesa;
            listaCosti.appendChild(costi);
        }
        

        arrayCosti.push(spesa);
        
        if(y>=0){ 
            arrayCosti.forEach(function(costo){
            totSpese.value -= costo;
            var totCosti = Number (totSpese.value);
            var saldoIniz = Number (budget);

            budgetResiduo.value = saldoIniz += totCosti;})

            // switch per messaggi
            if(budgetResiduo.value <= 2000 && budgetResiduo.value >= 1800){
                alert("Attenzione budget a metà circa: " + budgetResiduo.value);
            }else if(budgetResiduo.value <= 900 && budgetResiduo.value >= 600){
                alert("Attenzione budget quasi terminato: " + budgetResiduo.value);
            }
        }

        
    })



/*

while ( budget > 0)  {
    let spesa = Math.floor(Math.random()*50)
    budget -= spesa;
    document.getElementById("valori-budget").innerHTML = budget; }
*/
