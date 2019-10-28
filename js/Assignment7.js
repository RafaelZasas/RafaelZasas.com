let words = [];
var startTime;
var stopTime;
var sentence;

function init() {
    document.getElementById("emoji").style.visibility = "hidden";
    setBeginner();
}

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

    sentence="";
    // create the practice sentence
    for(let i = 0; i < 4; i++){
        sentence += words[Math.floor(Math.random() * 13)];
        if(i < 3)
            sentence += " ";
    }

    document.getElementById('GivenText').value = sentence;
    document.getElementById('out').innerHTML = '';

    // Start the timer
    var date = new Date();
    startTime = date.getSeconds();
}

function stop() {
    document.getElementById("emoji").style.visibility = "visible";
    var date = new Date();
    stopTime = date.getSeconds();
    var time = stopTime - startTime;
    let answer = document.getElementById("usersText").value;
    let output;
    if (answer == sentence ){
        output= "Good job. You typed the text correctly.\n" ;
        document.getElementById("emoji").src=`/images/happy_face.jpg`;
    } else{
        output = `Sorry, you have entered the text incorrectly.\n 
            You typed: ${answer} \n You should have typed: ${sentence} \n`;
        document.getElementById("emoji").src=`/images/sad_face.jpg`;
    }

    output+= `Your total time was ${time} seconds.`;
    document.getElementById("out").innerHTML=output;



}

