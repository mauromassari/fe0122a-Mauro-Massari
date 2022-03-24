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
.then(res => res.json())
.then(data =>{
    data.forEach((province:any) =>{
        let option =  document.createElement("option")
        let menu1:any =  document.querySelector("#regioni")
        let menu2:any =  document.querySelector("#province")
        menu2.append(option)

        option.innerText = province.prov_nome

        menu2.addEventListener("change",stampaDati(this))
        
        function stampaDati(param:any):any{
            var x = param.options[param.selectedIndex].value;
            
            document.getElementById("demo").innerHTML = "You selected: " + x;
        }
        /*
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
    })
})