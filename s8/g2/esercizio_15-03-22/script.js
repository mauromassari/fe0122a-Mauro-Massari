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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    //versamento1
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        var operazione = this.balanceInit += sommaAggiunta;
        return operazione.toFixed(2);
    };
    //prelievo1
    SonAccount.prototype.oneWithDraw = function (sommaPrelevata) {
        var operazione = this.balanceInit -= sommaPrelevata;
        return operazione.toFixed(2);
    };
    //versamento2
    SonAccount.prototype.twoDeposit = function (SommaAggiunta2) {
        var operazione = this.balanceInit += SommaAggiunta2;
        return operazione.toFixed(2);
    };
    //prelievo2
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        return (this.balanceInit -= sommaPrelevata2).toFixed(2);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var operazione = this.balanceInit * 10 / 100;
        return (this.balanceInit += operazione).toFixed(2);
    };
    return MotherAccount;
}(SonAccount));
var sonAccount1 = new SonAccount(1000);
console.log("PRIMO CONTO, tipologia SonAccount");
console.log("Saldo iniziale: " + sonAccount1.balanceInit + "€");
console.log("Questo è il saldo dopo la prima operazione (primo versamento): " + sonAccount1.oneDeposit(500) + "€");
console.log("Questo è il saldo dopo la seconda operazione (primo prelievo): " + sonAccount1.oneWithDraw(700) + "€");
console.log("Questo è il saldo dopo la terza operazione (secondo versamento): " + sonAccount1.twoDeposit(300) + "€");
console.log("Questo è il saldo dopo la quarta operazione (secondo prelievo): " + sonAccount1.twoWithDraw(569) + "€");
console.log("***********************************");
var motherAccount1 = new MotherAccount(200);
console.log("SECONDO CONTO, MotherAccount");
console.log("Saldo iniziale: " + motherAccount1.balanceInit + "€");
console.log("Questo è il saldo dopo la prima operazione (primo versamento): " + motherAccount1.oneDeposit(500) + "€");
console.log("Questo è il saldo dopo la seconda operazione (primo prelievo): " + motherAccount1.oneWithDraw(700) + "€");
console.log("Questo è il saldo dopo la terza operazione (secondo versamento): " + motherAccount1.twoDeposit(670) + "€");
console.log("Questo è il saldo dopo la quarta operazione (secondo prelievo): " + motherAccount1.twoWithDraw(569) + "€");
console.log("Questo è il saldo com gli interessi del 10%: " + motherAccount1.addInterest() + "€");
