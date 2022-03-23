/*Scrivere un programma che crei due classi SonAccount e MotherAccount per la gestione di due conto correnti, 
che esegua le medesime operazioni di versamento e prelievo,
con in aggiunta il calcolo dell'interesse del conto corrente presente nella classe MotherAccount,
stampando il saldo attuale di entrambi i conto correnti.

Dati:

proprietà:
balanceInit:number=0  // saldo attuale 0

metodi:
oneDeposit:number // versamento
oneWithDraw // prelievo
twoDeposit:number // versamento
twoWithDraw // prelievo
addInterest// interesse MotherAccount 10% 
-----------------------------------------*/


class SonAccount{
    public balanceInit:number; //saldo attuale 0 - Saldo aggiornato

    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
    }

    //versamento1
    oneDeposit(sommaAggiunta:number):any{
        var operazione = this.balanceInit += sommaAggiunta
        return operazione.toFixed(2)
    }

    //prelievo1
    oneWithDraw(sommaPrelevata:number):any{
        var operazione = this.balanceInit -= sommaPrelevata
        return operazione.toFixed(2)
    } 

    //versamento2
    twoDeposit(SommaAggiunta2:number):any{
        var operazione = this.balanceInit += SommaAggiunta2
        return operazione.toFixed(2)
    }

    //prelievo2
    twoWithDraw(sommaPrelevata2:number):any{
        return (this.balanceInit -= sommaPrelevata2).toFixed(2)
    }
}

class MotherAccount extends SonAccount{

    constructor(balanceInit:number){
        super(balanceInit);
    }

    addInterest():any{
        var operazione = this.balanceInit*10/100
        return (this.balanceInit += operazione).toFixed(2)
    }
}


let sonAccount1 = new SonAccount(1000)
console.log("PRIMO CONTO, tipologia SonAccount")
console.log("Saldo iniziale: " + sonAccount1.balanceInit + "€")

console.log("Questo è il saldo dopo la prima operazione (primo versamento): " + sonAccount1.oneDeposit(500) + "€" )
console.log("Questo è il saldo dopo la seconda operazione (primo prelievo): " + sonAccount1.oneWithDraw(700) + "€")
console.log("Questo è il saldo dopo la terza operazione (secondo versamento): " + sonAccount1.twoDeposit(300) + "€")
console.log("Questo è il saldo dopo la quarta operazione (secondo prelievo): " + sonAccount1.twoWithDraw(569) + "€")

console.log("***********************************")

let motherAccount1 = new MotherAccount(200)
console.log("SECONDO CONTO, MotherAccount")
console.log("Saldo iniziale: " + motherAccount1.balanceInit + "€")

console.log("Questo è il saldo dopo la prima operazione (primo versamento): " + motherAccount1.oneDeposit(500) + "€" )
console.log("Questo è il saldo dopo la seconda operazione (primo prelievo): " + motherAccount1.oneWithDraw(700) + "€")
console.log("Questo è il saldo dopo la terza operazione (secondo versamento): " + motherAccount1.twoDeposit(670) + "€")
console.log("Questo è il saldo dopo la quarta operazione (secondo prelievo): " + motherAccount1.twoWithDraw(569) + "€")

console.log("Questo è il saldo com gli interessi del 10%: " + motherAccount1.addInterest() + "€")