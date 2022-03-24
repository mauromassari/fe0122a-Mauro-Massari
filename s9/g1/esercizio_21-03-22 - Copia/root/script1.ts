fetch('regioni.json') 
.then(res => res.json())
.then(data => {
    let menu:any = document.querySelector("#regioni");
    
    data.forEach((regione:any) =>{

        let option =  document.createElement("option");
        option.innerText = regione.prov_regione;
        option.setAttribute('value', regione.prov_regione)
        
        menu.append(option)

        menu.addEventListener("change", stampaDati())
                
        function stampaDati():any{
            let valueRegioneSelezionata:any = menu.value;
            
            let regioneSelezionata:any;
            
            
            for (let i = 0;i<data.length;i++){
                if (data[i].prov_regione == valueRegioneSelezionata){
                    regioneSelezionata=data[i];
                    console.log(regioneSelezionata)
                    
                }
            }

            
        }

        if(menu.valueRegioneSelezionata){
            fetch('province.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach((province:any) =>{
                let option =  document.createElement("option")
                let menu1:any =  document.querySelector("#regioni")
                let menu2:any =  document.querySelector("#province")
                menu2.append(option)

                option.innerText = province.prov_nome

            })
    })
        }
        
    })

    
})

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