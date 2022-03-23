// quando il documento è pronto...(forma breve)...
$(()=>{
    
    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).

    let carosello = $("#img-l");
    let slide = $("li");

    let pulsanteSx = $("#l-btn");

    // gestisco il click event handler per il pulsante sinistro.
    
  
        pulsanteSx.click(function(){
            let lProp = carosello.animate({
                left: "-=300"
            },1000)
    
        })
        
        

        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
//        let lProp = parseInt(carosello.css("left")); 

//        let w = carosello.width();

        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        
        
    //    if(lProp < w ){

        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"

        
        
/*        let lProp = carosello.animate({
            left: "-=300"
        })

*/        
    
        
    let pulsanteDx = $("#r-btn");
    
    pulsanteDx.click(function(){
        let lProp = carosello.animate({
            left: "+=300"
        },1000)

    })
    

        

        

      
    
    
        
    

    // gestisco il click event handler per il pulsante destro
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left
     
})

    