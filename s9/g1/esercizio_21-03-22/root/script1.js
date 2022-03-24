fetch('regioni.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (regione) {
        var option = document.createElement("option");
        option.innerText = regione.prov_regione;
        option.setAttribute('value', regione.prov_regione);
        var menu = document.getElementById("regioni");
        menu.append(option);
        menu.addEventListener("change", stampaDati());
        function stampaDati() {
            var valueRegioneSelezionata = menu.option[menu.selectedIndex].value;
            console.log(valueRegioneSelezionata);
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
