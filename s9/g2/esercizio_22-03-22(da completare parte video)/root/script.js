fetch('file.json')
.then(res => res.json())
.then(data =>{
    let divAudio;
    let divFiglioAudio;
    
    let mediaPlayerAudioPadre;

    data.forEach((file) =>{
        divAudio = document.getElementById("brani")
        divFiglioAudio = document.createElement("div")
        
        if(file.type == "audio"){
            divAudio.append(divFiglioAudio)
            divFiglioAudio.setAttribute("class","p-2 border bd-highlight btn btn-outline-dark")
            divFiglioAudio.innerText = file.title
        }
        
        
        divFiglioAudio.addEventListener("click", function(){
            
            mediaPlayerAudioPadre = document.getElementById("mediaPlayerAudioPadre")

            mediaPlayerAudioPadre.innerHTML = " "

            let source = document.createElement("source")
            let audio = document.createElement("audio")
                
            mediaPlayerAudioPadre.append(audio)
            audio.setAttribute("controls","")
            audio.setAttribute("autoplay","")
                    
            source.setAttribute("src", "media/audio/" + file.file)
            audio.append(source)           
        })
    })
    
    //------VIDEO---------

    
    let divVideo;
    let divFiglioVideo;
    
    let mediaPlayerVideoPadre;

    data.forEach((file) =>{
        divVideo = document.getElementById("video")
        divFiglioVideo = document.createElement("div")

        if(file.type == "video"){
            divVideo.append(divFiglioVideo)
            divFiglioVideo.setAttribute("class","p-2 border bd-highlight btn btn-outline-dark")
            divFiglioVideo.innerText = file.title
        }
        
        
        divFiglioVideo.addEventListener("click", function(){
            
            mediaPlayerVideoPadre = document.getElementById("mediaPlayerVideoPadre")
            
            mediaPlayerVideoPadre.innerHTML = " "
            
            let source = document.createElement("source")
            let video = document.createElement("video")
            
            mediaPlayerVideoPadre.append(video)
            video.setAttribute("width", "400")
            video.setAttribute("controls", "")
            video.setAttribute("autoplay","")
            
            source.setAttribute("src", "media/video/" + file.file)
            video.append(source)           
            /*
            */
        })

        
    })
    
})