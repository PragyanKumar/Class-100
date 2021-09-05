var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function run(event){
    console.log(event)
    var content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content
    if(content=="Take my selfie."){
    speak()
    }
}
//Speak function//
function speak(){
    var synth=window.speechSynthesis
    speakData="taking your selfie in 5 seconds" 
    var utterThis=new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function(){
        take_snapShot()
        save()
    },5000)
}

//Webcam dimensions//
Webcam.set({
width:290,
height:300,
image_format:'png',
png_quality:100
})
camera=document.getElementById("camera")

//Snapshot function//
function take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="' + data_uri + '">'
    })
}

//Save function//
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href=image
    link.click()
}