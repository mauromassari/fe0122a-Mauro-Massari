/* Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare
con contratto a ricarica.

Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e'
definita come number carica, e rappresenta il quantitativo di euro
disponibile per le chiamate. 

La seconda variabile d'istanza e' definita come
number numeroChiamate, e rappresenta il numero di chiamate effettuate con
il cellulare.

La classi FirstUser-SecondUser-ThirdUser deve dichiarare nell'interfaccia 
e implementare nelle classi i seguenti metodi: un
metodo definito come public void ricarica(double unaRicarica), che ricarica il
telefonino. 

Un metodo definito come public void chiamata(double minutiDurata), che
effettua una chiamata di durata in minuti specificata dal parametro esplicito.

Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria
contenente il numero di chiamate effettuate dal telefonino. 

Si assuma un costo di 0.20 euro per ogni minuto di chiamata,un metodo public number numero404(),
che restituisce il valore della carica disponibile. 

Un metodo public number
getNumeroChiamate(), che restituisce il valore della variabile d'istanza
numeroChiamate. 

Infine, un metodo public void azzeraChiamate(), che azzera la
variabile contenente il numero di chiamate effettuate dal telefonino.

Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate. */

interface Smartphone{
    numberCarica:number; //credito telefonico
    minutiChiamate:number; //minuti di chiamate effettuate
    numeroChiamate:number;  //chiamate effettuate
}

class FirstUser implements Smartphone{
    public numberCarica:number;
    public minutiChiamate:number;
    public numeroChiamate:number;

    //do 0 come valore di defaul per tutte e tre le bvariabili
    constructor(numCar:number=0, minChiam:number=0, numChiam:number=0){
        this.numberCarica = numCar;
        this.minutiChiamate = minChiam;
        this.numeroChiamate = numChiam;
    }

    //ricarica il credito
    public ricarica(creditoAggiunto:number):void{
        this.numberCarica += creditoAggiunto;
        console.log("- Hai ricaricato il tuo credito di " + this.numberCarica + "€")
    }

    //effettua una chiamata
    public chiamata(durataChiamataInMinuti:number):void{

        //se il credito è minore a 0,20€ ...
        if(this.numberCarica < 0.20){
            console.log("- Non hai credito a sufficienze per effettuare la chiamata ")
        }else{

        //mentre se hai credito...
        //minuti di chiamata
        this.minutiChiamate += durataChiamataInMinuti;

        //costo della chiamata
        let costoChiamata = durataChiamataInMinuti * 0.20

        //aggiornamento credito dopo la chiamata
        this.numberCarica -= costoChiamata

        //quanto dura la chiamata?
        console.log(`- Hai effettuato una chiamata di ${durataChiamataInMinuti} minuti`)

        //aggiungi una chiamata?
        this.numeroChiamate++
        } 
    }

    //credito residuo?
    public numero404():void{
        console.log(`- Il tuo credito è di ${this.numberCarica.toFixed(2)} € iva inclusa`)
    }

    public getNumeroChiamate(){
        console.log(`- Hai effettuato ${this.minutiChiamate} minuti di chaimate`)
    }

    //cancella le chiamate effettuate
    public azzeraChiamate():void{
        this.minutiChiamate = 0;
        this.numeroChiamate = 0
        console.log(`- Hai eseguito il comando: Cancella tutte le chiamate`)
    }

    //quante chiamate hai effettuato?
    public totChiamate(){
        console.log(`- Hai effettuato in totale ${this.numeroChiamate} chiamate`)
    }

} 

class SecondUser implements Smartphone{
    public numberCarica:number;
    public minutiChiamate:number;
    public numeroChiamate:number;

    //do 0 come valore di defaul per tutte e tre le bvariabili
    constructor(numCar:number=0, minChiam:number=0, numChiam:number=0){
        this.numberCarica = numCar;
        this.minutiChiamate = minChiam;
        this.numeroChiamate = numChiam;
    }
    //ricarica il credito
    public ricarica(creditoAggiunto:number):void{
        this.numberCarica += creditoAggiunto;
        console.log("- Hai ricaricato il tuo credito di " + this.numberCarica + "€")
    }

    //effettua una chiamata
    public chiamata(durataChiamataInMinuti:number):void{

        //se il credito è minore a 0,20€ ...
        if(this.numberCarica < 0.20){
            console.log("- Non hai credito a sufficienze per effettuare la chiamata ")
        }else{

        //mentre se hai credito...
        //minuti di chiamata
        this.minutiChiamate += durataChiamataInMinuti;

        //costo della chiamata
        let costoChiamata = durataChiamataInMinuti * 0.20

        //aggiornamento credito dopo la chiamata
        this.numberCarica -= costoChiamata

        //quanto dura la chiamata?
        console.log(`- Hai effettuato una chiamata di ${durataChiamataInMinuti} minuti`)

        //aggiungi una chiamata?
        this.numeroChiamate++
        } 
    }

    //credito residuo?
    public numero404():void{
        console.log(`- Il tuo credito è di ${this.numberCarica.toFixed(2)} € iva inclusa`)
    }

    public getNumeroChiamate(){
        console.log(`- Hai effettuato ${this.minutiChiamate} minuti di chaimate`)
    }

    //cancella le chiamate effettuate
    public azzeraChiamate():void{
        this.minutiChiamate = 0;
        this.numeroChiamate = 0
        console.log(`- Hai eseguito il comando: Cancella tutte le chiamate`)
    }

    //quante chiamate hai effettuato?
    public totChiamate(){
        console.log(`- Hai effettuato in totale ${this.numeroChiamate} chiamate`)
    }
}

class ThirdUser implements Smartphone{
    public numberCarica:number;
    public minutiChiamate:number;
    public numeroChiamate:number;

    //do 0 come valore di defaul per tutte e tre le bvariabili
    constructor(numCar:number=0, minChiam:number=0, numChiam:number=0){
        this.numberCarica = numCar;
        this.minutiChiamate = minChiam;
        this.numeroChiamate = numChiam;
    }
    //ricarica il credito
    public ricarica(creditoAggiunto:number):void{
        this.numberCarica += creditoAggiunto;
        console.log("- Hai ricaricato il tuo credito di " + this.numberCarica + "€")
    }

    //effettua una chiamata
    public chiamata(durataChiamataInMinuti:number):void{

        //se il credito è minore a 0,20€ ...
        if(this.numberCarica < 0.20){
            console.log("- Non hai credito a sufficienze per effettuare la chiamata ")
        }else{

        //mentre se hai credito...
        //minuti di chiamata
        this.minutiChiamate += durataChiamataInMinuti;

        //costo della chiamata
        let costoChiamata = durataChiamataInMinuti * 0.20

        //aggiornamento credito dopo la chiamata
        this.numberCarica -= costoChiamata

        //quanto dura la chiamata?
        console.log(`- Hai effettuato una chiamata di ${durataChiamataInMinuti} minuti`)

        //aggiungi una chiamata?
        this.numeroChiamate++
        } 
    }

    //credito residuo?
    public numero404():void{
        console.log(`- Il tuo credito è di ${this.numberCarica.toFixed(2)} € iva inclusa`)
    }

    public getNumeroChiamate(){
        console.log(`- Hai effettuato ${this.minutiChiamate} minuti di chaimate`)
    }

    //cancella le chiamate effettuate
    public azzeraChiamate():void{
        this.minutiChiamate = 0;
        this.numeroChiamate = 0
        console.log(`- Hai eseguito il comando: Cancella tutte le chiamate`)
    }

    //quante chiamate hai effettuato?
    public totChiamate(){
        console.log(`- Hai effettuato in totale ${this.numeroChiamate} chiamate`)
    }
}


console.log("USER1 (istanza classe FirstUser): eventi smartphone")
    let user1 = new FirstUser()
    user1.numero404() //controllo credito
    user1.ricarica(5) //ricarica di 5€
    user1.numero404() //controllo credito
    user1.chiamata(6) //chiamata di 6 minuti
    user1.chiamata(10) //chiamata di 10 minuti
    user1.numero404() //controllo credito
    user1.getNumeroChiamate() //minuti di chiamate tot.
    user1.totChiamate() //totale chiamate
    user1.azzeraChiamate() //cancella min chiamate tot.
    user1.getNumeroChiamate() //minuti di chiamate tot.
    user1.totChiamate() //totale chiamate
console.log("*********************")

console.log("USER2 (istanza classe SecondUser): eventi smartphone")
    let user2 = new SecondUser()
    user2.numero404() //controllo credito
    user2.ricarica(10) //ricarica di 10€
    user2.numero404() //controllo credito
    user2.chiamata(6) //chiamata di 6 minuti
    user2.chiamata(10) //chiamata di 10 minuti
    user2.chiamata(15) //chiamata di 15 minuti
    user2.numero404() //controllo credito
    user2.getNumeroChiamate() //minuti di chiamate tot.
    user2.totChiamate() //totale chiamate
    user2.azzeraChiamate() //cancella min chiamate tot.
    user2.getNumeroChiamate() //minuti di chiamate tot.
    user2.totChiamate() //totale chiamate
console.log("*********************")

console.log("USER3 (istanza classe ThirddUser): eventi smartphone")
    let user3 = new SecondUser()
    user3.numero404() //controllo credito
    user3.ricarica(20) //ricarica di 10€
    user3.numero404() //controllo credito
    user3.chiamata(6) //chiamata di 6 minuti
    user3.chiamata(10) //chiamata di 10 minuti
    user3.chiamata(15) //chiamata di 15 minuti
    user3.chiamata(30) //chiamata di 30 minuti
    user3.numero404() //controllo credito
    user3.getNumeroChiamate() //minuti di chiamate tot.
    user3.totChiamate() //totale chiamate
    user3.azzeraChiamate() //cancella min chiamate tot.
    user3.getNumeroChiamate() //minuti di chiamate tot.
    user3.totChiamate() //totale chiamate
console.log("*********************")

