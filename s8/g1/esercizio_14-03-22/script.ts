/*Scrivi un programma che dati due numeri di due ipotetici giocatori,
generi un numero casuale compreso tra 1 e 100 (zero escluso),
verifichi se uno dei due giocatori ha azzeccato il numero casuale,
e in caso contrario quale dei due si è avvicinato di più al numero.

Esempio:
  Input: giocatore 1 = 5, giocatore 2 = 10
  Output: Numero casuale generato = 7
          "Nessuno dei due ha azzeccato il numero casuale,
           ma il giocatore 1 si è avvicinato di più!"

Consigli:
Per generare un numero casuale utlizza la funzione javascript Math.random()
 che restituisce un intervallo compreso tra 0 e 1.

Il valore ottenuto dovrà essere convertito per ottenere un valore valido
 per il tuo intervallo, in questo modo:
  (Math.random() * (max-min) + min) ovvero, nel tuo caso:
  (Math.random() * (100-1) + 1)

Ricordati che il valore dovrà essere intero quindi dovrai 
arrontondarlo usando Math.floor()*/


let giocatore: number = Math.abs(Math.floor((Math.random() * (100-1) + 1)))
let giocatore_2: number = Math.abs(Math.floor((Math.random() * (100-1) + 1)))
let generatoreNumero: number = Math.abs(Math.floor((Math.random() * (100-1) + 1)))

let tolleranzaUp: number = Math.abs(generatoreNumero + 10)
let tolleranzaDown: number = Math.abs(generatoreNumero - 10)

console.log("È uscito il numero: " + generatoreNumero)
console.log(`È concessa una tolleranza compresa fra ${tolleranzaDown}  e ${tolleranzaUp}`)

console.log("Il giocatore 1 ha il numero: " + giocatore)
console.log("Il giocatore 2 ha il numero: " + giocatore_2)

if(generatoreNumero == giocatore || giocatore >= tolleranzaDown && giocatore <= tolleranzaUp){
    console.log("Il vincitore della coppa del nonno è il giocatore 1")
}else if(generatoreNumero == giocatore_2 || giocatore_2 >= tolleranzaDown && giocatore_2 <= tolleranzaUp){
    console.log("Il vincitore della coppa del nonno è il giocatore 2")
}else{
    console.log("Nessuno ha vinto niente")
}


