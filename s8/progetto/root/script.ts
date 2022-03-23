/*
Scrivere un programma che descriva e inizializzi le caratteristiche dei capi di abbigliamento
attraverso il costructor.

Utilizzare i metodi getsaldocapo(per applicare il saldo da sottrarre all acquisto del capo alla cassa) e il metodo getacquistocapo(che riporterà il costo totale di tale capo).

Successivamente utilizzi fetch per recuperare i capi dal file Abbigliamento.json,
dove son presenti tutte le caratteristiche dei capi di abbigliamento.

È necessario mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch.

Creare manualmente altre 3 istanze della classe creata precedentemente, scrivendo le caratteristiche dei capi a mano.

(vietato modificare il file Abbigliamento.json)

Dati:

proprietà:

        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number


        metodi:
        
        getsaldocapo:number
        getacquistocapo:number 
*/

fetch('Abbigliamento.json') 
.then(res => res.json())
.then(data => {

    data.forEach((item:any) =>{
        let capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)

        //mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch
        //console.log(capi)
        //console.log("**********************")
    })
})

class Vestiti{

    public id: number
    public codprod: number
    public collezione: string
    public capo: string
    public modello: number
    public quantita: number
    public colore: string
    public prezzoivaesclusa: number
    public prezzoivainclusa: number
    public disponibile: string
    public saldo: number


    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number){
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    } 

    //il saldo da sottrarre all acquisto del capo alla cassa
    public getSaldoCapo():any{
        return (this.prezzoivainclusa * this.saldo / 100).toFixed(2)
        
    }

    //che riporterà il costo totale di tale capo
    public getAcquistoCapo():any{
        let sconto = this.prezzoivainclusa * this.saldo / 100;
        let prezzo = this.prezzoivainclusa
        return (prezzo - sconto).toFixed(2)
    }
    
}

//CAPO 1
let capo1= new Vestiti (1,2121,"primavera","cardigan",1231,5,"nero",18.50,22.57,"negozio",45)

console.log(`CARATTERISTICHE CAPO ${capo1.id}`)
console.log(capo1)
console.log(`Il prezzo di listino era ${capo1.prezzoivainclusa.toFixed(2)} €`)
console.log(`Lo sconto è di ${capo1.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo1.getAcquistoCapo()} €`)
console.log("**********************")


//CAPO 2
let capo2= new Vestiti (2,4111,"estate","t-shirt",1251,6,"rosso",5.50,6.71,"magazzino",30)


console.log(`CARATTERISTICHE CAPO ${capo2.id}`)
console.log(capo2)
console.log(`Il prezzo di listino era ${capo2.prezzoivainclusa.toFixed(2)} €`)
console.log(`Lo sconto è di ${capo2.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo2.getAcquistoCapo()} €`)
console.log("**********************")


//CAPO 3
let capo3= new Vestiti (3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50)

console.log(`CARATTERISTICHE CAPO ${capo3.id}`)
console.log(capo3)
console.log(`Il prezzo di listino era ${capo3.prezzoivainclusa.toFixed(2)} €`)
console.log(`Lo sconto è di ${capo3.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo3.getAcquistoCapo()} €`)
console.log("**********************")


//CAPO 4
let capo4= new Vestiti (4,1111,"estate","maglione",1221,4,"verde",20,24.40,"negozio",50)

console.log(`CARATTERISTICHE CAPO ${capo4.id}`)
console.log(capo4)
console.log(`Il prezzo di listino era ${capo4.prezzoivainclusa.toFixed(2)} €`)
console.log(`Lo sconto è di ${capo4.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo4.getAcquistoCapo()} €`)
console.log("**********************")


//CAPO 5
let capo5= new Vestiti (5,6111,"primavera","maglia",1021,5,"blu",11,13.42,"magazzino",60)

console.log(`CARATTERISTICHE CAPO ${capo5.id}`)
console.log(capo5)
console.log(`Il prezzo di listino era ${capo5.prezzoivainclusa.toFixed(2)} €`)
console.log(`Lo sconto è di ${capo5.getSaldoCapo()} €`)
console.log(`Il prezzo scontato è di ${capo5.getAcquistoCapo()} €`)
console.log("**********************")