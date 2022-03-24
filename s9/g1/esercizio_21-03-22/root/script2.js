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
var _this = this;
fetch('province.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (province) {
        var option = document.createElement("option");
        var menu1 = document.querySelector("#regioni");
        var menu2 = document.querySelector("#province");
        menu2.append(option);
        option.innerText = province.prov_nome;
        menu2.addEventListener("change", stampaDati(_this));
        function stampaDati(param) {
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
    });
});
