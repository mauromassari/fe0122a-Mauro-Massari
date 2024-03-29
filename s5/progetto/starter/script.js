 //FUNZIONI DATE DAL DOCENTE
 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//-----------------------------------------------------------------------------
//JS SCRITTO DA ME

// Nella variabile "pulsante inserisco il button con id "add_btn" 
let pulsante = document.querySelector("#add_btn");



//Creo una funzione che viene invocata premendo il button
pulsante.addEventListener("click", function(){

    //Insersco nella variabile "testoInput" il testo che viene digitato  
    let testoInput = document.querySelector("#task_txt").value;

    //Inserisco nella variabile "checkList" il tag ul con id "tasks_list_html"
    let checkList = document.querySelector("#tasks_list_html");

    //Inserisco nella variabile "pointList" gli elemnti li della ul
        //i tag li verrano creati al click sul button 
    let pointList = document.createElement("li");

    //Inserisco il testo inserito nell'input all'interno dei tag li
        //che verranno generati in seguito al click sul button
    pointList.innerHTML = testoInput;

    // aggiungo la classe ".pointer" agli elementi "li"    
    pointList.classList.add("pointer");

    //Ripulisco il "value" del nostro input dopo aver aggiunto un elemnto "li"
    document.querySelector("#task_txt").value = "";

    
    //aggiungo la classe ".pointer" al tag "ul"
    checkList.append(pointList);

    //creo una funzione che mi permette di rimuore gli elemeti "li" quando
        // ci clicco sopra
    pointList.addEventListener("click", function(){
        pointList.remove();
        rimuoviElementodaDb(pointList);
       
    })

    //Salvo nel localStorage gli elementi "li" generati
    salvaDatiNelDb(testoInput);
   
})

/* Qui ho provato a far sì che si disattivasse il button qualora non venisse inserito
    del testo nel value dell'input, ma non funziona

document.querySelector("#task_txt").addEventListener("focus", function(){
    let pulsante = document.querySelector("#add_btn");


      if (document.querySelector("#task_txt").value == ""){
        pulsante.addAttribute("disabled")}

    disabled="true"

})
*/

//creo la funzione che mi permette di "conservare" i tag "li" inseriti anche 
    // qualora ricarissi la pagina
function creaHtml(){

    // inserisco nella let "elementi salvati" la richiesta dei dati presenti nel localStorage
        // pushati grazie alla funzione salvaDatiNelDb
    let elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'));

    
    //creo un ciclo for Each che va a ciclare tutti gli elementi presenti nella let "elementiSalvarti"
    elementiSalvati.forEach(function(elemento){
        
        let pointList = document.createElement("li");
        pointList.innerHTML = elemento;
        let checkList = document.querySelector("#tasks_list_html");
        
        pointList.classList.add("pointer");
        
        checkList.append(pointList);

        pointList.addEventListener("click", function(){
            pointList.remove();
            rimuoviElementodaDb(pointList);
        })    

    })
}

//invoco la funzione creata in precedenza
creaHtml();


