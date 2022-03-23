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
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        //mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch
        //console.log(capi)
        //console.log("**********************")
    });
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    //il saldo da sottrarre all acquisto del capo alla cassa
    Vestiti.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa * this.saldo / 100).toFixed(2);
    };
    //che riporterà il costo totale di tale capo
    Vestiti.prototype.getAcquistoCapo = function () {
        var sconto = this.prezzoivainclusa * this.saldo / 100;
        var prezzo = this.prezzoivainclusa;
        return (prezzo - sconto).toFixed(2);
    };
    return Vestiti;
}());
//CAPO 1
var capo1 = new Vestiti(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.50, 22.57, "negozio", 45);
console.log("CARATTERISTICHE CAPO ".concat(capo1.id));
console.log(capo1);
console.log("Il prezzo di listino era ".concat(capo1.prezzoivainclusa.toFixed(2), " \u20AC"));
console.log("Lo sconto \u00E8 di ".concat(capo1.getSaldoCapo(), " \u20AC"));
console.log("Il prezzo scontato \u00E8 di ".concat(capo1.getAcquistoCapo(), " \u20AC"));
console.log("**********************");
//CAPO 2
var capo2 = new Vestiti(2, 4111, "estate", "t-shirt", 1251, 6, "rosso", 5.50, 6.71, "magazzino", 30);
console.log("CARATTERISTICHE CAPO ".concat(capo2.id));
console.log(capo2);
console.log("Il prezzo di listino era ".concat(capo2.prezzoivainclusa.toFixed(2), " \u20AC"));
console.log("Lo sconto \u00E8 di ".concat(capo2.getSaldoCapo(), " \u20AC"));
console.log("Il prezzo scontato \u00E8 di ".concat(capo2.getAcquistoCapo(), " \u20AC"));
console.log("**********************");
//CAPO 3
var capo3 = new Vestiti(3, 1181, "inverno", "felpa", 1229, 8, "beige", 17.50, 21.35, "negozio", 50);
console.log("CARATTERISTICHE CAPO ".concat(capo3.id));
console.log(capo3);
console.log("Il prezzo di listino era ".concat(capo3.prezzoivainclusa.toFixed(2), " \u20AC"));
console.log("Lo sconto \u00E8 di ".concat(capo3.getSaldoCapo(), " \u20AC"));
console.log("Il prezzo scontato \u00E8 di ".concat(capo3.getAcquistoCapo(), " \u20AC"));
console.log("**********************");
//CAPO 4
var capo4 = new Vestiti(4, 1111, "estate", "maglione", 1221, 4, "verde", 20, 24.40, "negozio", 50);
console.log("CARATTERISTICHE CAPO ".concat(capo4.id));
console.log(capo4);
console.log("Il prezzo di listino era ".concat(capo4.prezzoivainclusa.toFixed(2), " \u20AC"));
console.log("Lo sconto \u00E8 di ".concat(capo4.getSaldoCapo(), " \u20AC"));
console.log("Il prezzo scontato \u00E8 di ".concat(capo4.getAcquistoCapo(), " \u20AC"));
console.log("**********************");
//CAPO 5
var capo5 = new Vestiti(5, 6111, "primavera", "maglia", 1021, 5, "blu", 11, 13.42, "magazzino", 60);
console.log("CARATTERISTICHE CAPO ".concat(capo5.id));
console.log(capo5);
console.log("Il prezzo di listino era ".concat(capo5.prezzoivainclusa.toFixed(2), " \u20AC"));
console.log("Lo sconto \u00E8 di ".concat(capo5.getSaldoCapo(), " \u20AC"));
console.log("Il prezzo scontato \u00E8 di ".concat(capo5.getAcquistoCapo(), " \u20AC"));
console.log("**********************");
