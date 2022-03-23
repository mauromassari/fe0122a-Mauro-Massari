//RICHIAMO EMAIL DALL'URL
let params = new URLSearchParams(document.location.search);
let emailRicevuto = params.get("email");
//let emailRicevutoString = parseInt(idRicevutoString);

//RICHIAMO DATI DAL LOCAL STORAGE - EMAIL
let esperimento = localStorage.getItem("utentiSalvati");
let arrayUtenti = JSON.parse(esperimento);

//identifico l'utente da grazie all'email ricevuta attraverso l'url
let utenteDaModificare = arrayUtenti.find(user => user.email == emailRicevuto)

let indexUser;
arrayUtenti.forEach(function (utente, ind){
    utente = utenteDaModificare 
    ind = indexUser
})

let inputAll = document.querySelectorAll("input")
let [nomeUtente, cognomeUtente, emailUtente, passwordUtente, indirizzoUtente, cittaUtente, zipUtente] = inputAll

nomeUtente.value = utenteDaModificare.nome
cognomeUtente.value = utenteDaModificare.cognome
emailUtente.value = utenteDaModificare.email
passwordUtente.value = utenteDaModificare.password
indirizzoUtente.value = utenteDaModificare.indirizzo
cittaUtente.value = utenteDaModificare.citta 
zipUtente.value = utenteDaModificare.zip

let butt = document.querySelector("button");

butt.addEventListener("click", function (evento){
    evento.preventDefault();
    let formValido = true;
    
    var utenteModificato = {
        nome: nomeUtente.value,
        cognome: cognomeUtente.value,
        email: emailUtente.value,
        password: passwordUtente.value,
        indirizzo: indirizzoUtente.value,
        citta: cittaUtente.value,
        zip: zipUtente.value
    }
    
    let span = document.querySelector("span")

    inputAll.forEach(function (elemento) {
        if (elemento.value == "") {
          elemento.nextElementSibling.textContent = "Richiesto";
          formValido = false;
        } else {
          elemento.nextElementSibling.textContent = "*";
        }
      });

    
        if(formValido) {  
            arrayUtenti.splice(indexUser,1, utenteModificato)
            //arrayUtenti.push(utenteModificato)
            localStorage.setItem("utentiSalvati", JSON.stringify(arrayUtenti));
        
            history.pushState({}, "", "elencoUtenti.html");
            location.href = "elencoUtenti.html";
        }
  
})

