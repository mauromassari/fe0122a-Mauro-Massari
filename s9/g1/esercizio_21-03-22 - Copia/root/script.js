fetch('regioni.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (regione) {
        var option = document.createElement("option");
        option.innerText = regione.prov_regione;
        option.setAttribute('value', regione.prov_regione);
        var menu = document.querySelector("#regioni");
        menu.append(option);
        menu.addEventListener("change", stampaDati());
        function stampaDati() {
            var valueRegioneSelezionata = menu.value;
            var regioneSelezionata;
            for (var i = 0; i < data.length; i++) {
                if (data[i].prov_regione == valueRegioneSelezionata) {
                    regioneSelezionata = data[i];
                }
            }
            console.log(regioneSelezionata);
        }
    });
});
/*
function populate(){
    menu = document.querySelector("#auto");
    menu.addEventListener("change", stampaDati)

    for (let i=0; i<automobili.length;i++){

      let option =  document.createElement("option");
      option.setAttribute('value', automobili[i].id)
      option.innerText= automobili[i].Nome + ' - €: ' + automobili[i].PrezzoVendita;
      menu.append(option);
    }
}

function stampaDati(){
    let idAutoSelezionata = menu.value;
    //let AutoSelezionata = automobili.find(auto => auto.id==idAutoSelezionata);
    //console.log(AutoSelezionata);

    let AutoSelezionata;
    for (let i = 0;i<automobili.length;i++){
        if (automobili[i].id==idAutoSelezionata){
            AutoSelezionata=automobili[i];
        }
    }
    document.getElementById('immagineAutoSelezionata').setAttribute('src' ,'img/'+AutoSelezionata.NomeFileImmagine)
    document.getElementById('NomeAutovettura').innerHTML=AutoSelezionata.Nome

    console.log(JSON.stringify(automobili));
}

*/ 
/*
fetch('province.json')
.then(res => res.json())
.then(data =>{
    data.forEach((province:any) =>{

        let option =  document.createElement("option")
        option.innerText= province.prov_nome

        let menu:any = document.querySelector("#province")
        menu.append(option)
        menu.addEventListener("change",stampaDati())

        function stampaDati():any{
            let valueProvinciaSelezionata = menu.value

            let provinciaSelezionata

            for(let i = 0; i < data.length; i++ ){
                if(data[i].prov_nome == valueProvinciaSelezionata){
                    provinciaSelezionata = data[i]
                }
            }
            document.getElementById('regioneSelezionata').setAttribute('src', 'img' + provinciaSelezionata)
        }
    })
})

*/
fetch('province.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (province) {
        var option = document.createElement("option");
        var menu1 = document.querySelector("#regioni");
        var menu2 = document.querySelector("#province");
        menu2.append(option);
        option.innerText = province.prov_nome;
        /*
        menu2.addEventListener("change",stampaDati(this))
        
        function stampaDati(param:any):any{
            var x = param.options[param.selectedIndex].text;

            document.getElementById("demo").innerHTML = "You selected: " + x;
        }
        */
        //let provinciaSelezionata = data.find(prov => province.prov_reg == menu1.innerText)
        //console.log(provinciaSelezionata)
        /*

        function stampaDati():any{
            let valueProvinciaSelezionata = menu.value

            let provinciaSelezionata

            for(let i = 0; i < data.length; i++ ){
                if(data[i].prov_nome == valueProvinciaSelezionata){
                    provinciaSelezionata = data[i]
                }
            }
        */
        //option.innerText= province.prov_nome
        /*
        let provinciaSelezionata = data.find
        
        let utenteTrovato = arrayUtenti.find(user => user.email == inputMail.value && user.password == inputPass.value) */
    });
});
