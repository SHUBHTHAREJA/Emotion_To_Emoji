Webcam.set({
width:350,
height:300,
img_format:'png',
img_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');


function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'" />';
})    
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uSvEKARlI/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speakData1="perdection 1 is "+pridection1;
    speakData2="perdection 2 is "+pridection2;
    var utter_this= new SpeechSynthesisUtterance (speakData1+speakData2);
    synth.speak(utter_this);
}

function check(){
    img=document.getElementById('capture_img');
    classifier.classify(img,got_result)
}

function got_result(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("result_emoji_name").innerHTML=result[0].label;
        document.getElementById("result_emoji_name2").innerHTML=result[1].label;
        pridection1=result[0].label;
        pridection2=result[1].label;
        speak()

        if (result[0].label =="happy") {
            document.getElementById("result_emoji_name").innerHTML="&#128522;"
        };
        if (result[0].label =="angry") {
            document.getElementById("result_emoji_name").innerHTML="&#128548;"
        };
        if (result[0].label =="sad") {
            document.getElementById("result_emoji_name").innerHTML="&#128532;"
        };
        if (result[0].label =="crying") {
            document.getElementById("result_emoji_name").innerHTML="&#128546;"
        };
        if (result[1].label =="happy") {
            document.getElementById("result_emoji_name2").innerHTML="&#128522;"
        };
        if (result[1].label =="angry") {
            document.getElementById("result_emoji_name2").innerHTML="&#128548;"
        };
        if (result[1].label =="sad") {
            document.getElementById("result_emoji_name2").innerHTML="&#128532;"
        };
        if (result[1].label =="crying") {
            document.getElementById("result_emoji_name2").innerHTML="&#128546;"
        };
        
        
    }
    
}
