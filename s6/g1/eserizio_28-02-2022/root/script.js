// Quando il documento è pronto...
$(document).ready(() =>{

        //gestisco il click sul pulsante Iscriviti

        $("#iscr-news").click(function(){
            
            
            // inizializzo le variabili(locali)
            var controllo = $("#nome").val();
            var controllo2 = $("#email-1").val();
            var controllo3 = $("#email-2").val();


            //creo un if per il value dell'input dell'id nome
            if(controllo == "" || controllo == undefined){
                $("#nome").next().text("Richiesto");

                //posizionare un asterisco per identificare il campo obbligatorio. 
            }else{$("#nome").next().text("*"); }

            //----------------------------------------------------------------

            if(controllo2 == "" || controllo2 == undefined){
                $("#email-1").next().text("Richiesto");
            }else{$("#email-1").next().text("*");}

            //----------------------------------------------------------------
           
            if(controllo3 == "" || controllo3 == undefined){
                $("#email-2").next().text("Richiesto");
            }else{$("#email-2").next().text("*");}

            //----------------------------------------------------------------
             // nella verifica devo mettere una ulteriore condizione se le email inserite sono  diverse
            if(controllo == "" || controllo == undefined || 
               controllo2 == "" || controllo2 == undefined || 
               controllo3 == "" || controllo3 == undefined){
                alert("Dimentichi qualcosa!");  

            }else if(controllo2 != controllo3){
                alert("Le email non corrispondono")

            }else{
                alert("Wow! Grazie per la fiducia!")
            } 
         
        })

        
        //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti 
        $("#pulisci-form").click(function(){

            //prendi tutti gli input che hanno type=text e 
            // sostituisci il testo del value con una stringa vuota
            $("input:text").val("");
        })

        
        

        

    
    


});


