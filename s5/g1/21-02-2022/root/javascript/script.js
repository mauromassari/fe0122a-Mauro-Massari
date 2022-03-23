var dataAttuale = new Date();



document.querySelector("h1").innerHTML = dataAttuale;

    var anno =  document.getElementById("anno");

        anno.innerText = dataAttuale.getFullYear();

        anno.style.color = "violet";
        anno.style.fontSize = "20px";
        anno.style.fontWeight = "bold";

        let lAnno = dataAttuale.getFullYear();



        let ilMese = dataAttuale.getMonth();
        document.getElementById("mese").innerText = ilMese;
            

        let ilGiorno = dataAttuale.getDate();
        document.querySelector("p.giorno").innerText = ilGiorno;
            

            
        document.querySelector("h3 > input").value = 
        (ilGiorno + '/' + ilMese + '/' + lAnno);

        document.querySelector("h3 > input").style.color = "blue";
        document.querySelector("h3 > input").style.fontWeight = "bolder";


