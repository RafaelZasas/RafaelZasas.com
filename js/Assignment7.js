let words = [];
var startTime;
var stopTime;
var date = new Date();
var practice="";

function reset() {
    document.getElementById("usersText").value = "";
}

function setBeginner() {
    words = ["Pablo", "random", "officer", "police", "banana", "apples", "roast", "corndog", "tissues", "phone","computer","wallet","bottle"];
}

function setAdvanced() {
    words = ['perpetually', 'successful', 'exploitable', 'extravagant', 'unnecessary', 'Johannes', 'xylophone', 'Britannica', 'despicable', 'preposterous', 'pyromaniac'];
}

function start() {
    let sentance = "";
    // TASK 1: BUILD THE STRING AND DISPLAY IT
    for(let i = 0; i < 4; i++){
        sentance += words[Math.floor(Math.random() * 11)];
        if(i < 3)
            practice += " ";
    }

    document.getElementById('GivenText').value = practice;
    document.getElementById('out').innerHTML = '';

    // Start the timer

    startTime = date.getSeconds();
}

function stop() {
    stopTime = date.getSeconds()-startTime;
    let answer = document.getElementById("usersText").value;
    let output;
    if (answer == practice ){
        output= "Good job. You typed the text correctly.\n" ;
        document.getElementById("emoji").src=`/images/happy_face.jpg`;
    } else{
        output = `Sorry, you have entered the text incorrectly.\n 
            You typed: ${answer} \n You should have typed: ${practice} \n`;
        document.getElementById("emoji").src=`/images/sad_face.jpg`;
    }

    output+= `Your total time was ${stopTime} seconds.`;
    document.getElementById("out").innerHTML=output;



}

