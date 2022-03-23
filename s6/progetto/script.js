$(() =>{

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

    $("#inizia").click(function(){
        
        $("#box").animate({
            width: "1000"
        }, 
            {duration: 6000,
            easing: "swing",
            step: function(x){
                $("#testo").text(Math.round(x * 100 / 1000) + "%");
            },
             
            complete: function(){
                $("#box").delay(500).animate({width:"0px", opacity: 0},3000,function(){
                    $(".boxEst").animate({padding:"20px",marginTop:"20px"}, 1000)
                })
                
                


        //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
        //crea un ciclo che si fermi alla sedicesima iterazione
        for(let i = 0; i < 16; i++){

            //genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
            //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
            let random = Math.floor(Math.random() * mieImg.length)

            //rimuovi l'immagine dall'array
            let immagineRandom = mieImg.splice(random, 1)
            
            //usa jquery per creare un div come questo:
            //<div class="images" id="emoji'+i+'" ></div>
            //contenente un tag img come questo: 
            //<img id="'+i+'" src="img/'+immagineRandom+'.png"  width="130" height="130">
            //dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente
            $("#memory").fadeIn(3000)
            $('<div class="images" id="emoji0'+i+'"><img id="'+i+'"src="img/'+immagineRandom+'.png" width="130" height="130"></div>').appendTo('#memory')
            
            $("div.images").click(function(){
                $("#memory").addClass("hvr-wobble-vertical");
              });

              $(".images").delay(6000).addClass("hvr-buzz")
            

            $("div.images").hover(function(){
                $(this).css("background-color", "azure");
                }, function(){
                $(this).css("background-color", "#00dadb");
              });
            
        }

        //ricordati di mostrare gli elementi di html appena creati

        //creo un array in cui salverò le informazioni sugli elementi cliccati
        immaginiCliccate = []
        
        
        //gestione evento click
        //preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)
        $('.images').click(function(){

            //Crea un contatore di click
            //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
            let nClick = $('.numclicks span').text()

            //incrementa di 1 il valore ottenuto
            nClick++
            $('.numclicks span').text(nClick)
            
            //riscrivi il numero nell'html, sostituendolo con quello pre esistente
            if(immaginiCliccate.length !=2){
                
                //crea una variabile contenente l'id dell'immagine cliccata
                let imgId = $(this).children().attr('id')
                
                //crea una variabile contenente l'attributo src dell'immagine cliccata
                let imgSrc = $(this).children().attr('src')
                
                //rendi visibile l'immagine presente nell'elemento cliccato
                $('#' +imgId).show()
                
                //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
                let oggettoImg = {
                    id: imgId,
                    src: imgSrc
                }
                
                //aggiungi l'oggetto appena creato all'array immaginiCliccate
                immaginiCliccate.push(oggettoImg)

                //crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
                //se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
                if(immaginiCliccate.length == 2){
                    
                    //controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno
                    //crea un nuovo if per verificare se le immagini selezionate sono identiche o meno 
                    if(immaginiCliccate[0].src == immaginiCliccate[1].src){

                        //confronta gli elementi cliccati, se le proprietà src sono identiche svuota l'array immaginiCliccate
                        immaginiCliccate = []
    
                    }else{

                        //usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
                        setTimeout(function(){

                            //le carte che ha scoperto prima che queste scompaiano
                            $('#'+immaginiCliccate[0].id).hide()
                            $('#'+immaginiCliccate[1].id).hide()
                            
                            //se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini
                            immaginiCliccate = []
                        }, 300)
                    }   
                }
           }
    
        })
        
        } 

        })
    })

    
    $("#reset").click(function(){
        window.location.reload()
    })
   
        

})
