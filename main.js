var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "selfie"){
        speak();
    }
}
function speak(){
    synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    speak_data = "Taking your selfies";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
       photo1(); 
    },5000);
    setTimeout(function(){
        photo2(); 
     },10000);
     setTimeout(function(){
        photo3(); 
     },15000);
}
Webcam.set({
    width:440,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
camera = document.getElementById("camera");
function photo1(){
    Webcam.snap(function(data_uri){
        document.getElementById("img1").innerHTML = "<img id = 'selfie1' src = '"+data_uri+"'>";
    })
}
function photo2(){
    Webcam.snap(function(data_uri){
        document.getElementById("img2").innerHTML = "<img id = 'selfie2' src = '"+data_uri+"'>";
    })
}
function photo3(){
    Webcam.snap(function(data_uri){
        document.getElementById("img3").innerHTML = "<img id = 'selfie3' src = '"+data_uri+"'>";
    })
}