let words = [];
var sentence;
let startTime;
let stopTime;

function init() {
    document.getElementById("emoji").style.visibility = "hidden";
    setBeginner();
}

function clear() {
    document.getElementById("usersText").value = "";
    document.getElementById("GivenText").value = "";
}

function reset() {
    document.getElementById("usersText").value = "";
    document.getElementById("GivenText").value = "";
    document.getElementById("emoji").style.visibility = "hidden";
    document.getElementById("out").innerText = "";
}

function setBeginner() {
    reset();
    words = ["Pablo", "random", "officer", "police", "banana", "apples", "roast", "corndog", "tissues", "phone", "computer", "wallet", "bottle"];

}

function setAdvanced() {
    reset();
    words = ['perpetually', 'successful', 'exploitable', 'extravagant', 'unnecessary', 'Johannes', 'xylophone', 'Britannica', 'despicable', 'preposterous', 'pyromaniac'];
}

function start() {
    reset();
    document.getElementById("emoji").style.visibility = "hidden";
    document.getElementById("out").innerText = "";
    sentence = "";
    // create the practice sentence
    for (let i = 0; i < 4; i++) {
        sentence += words[Math.floor(Math.random() * 13)];
        if (i < 3)
            sentence += " ";
    }

    document.getElementById('GivenText').value = sentence;
    document.getElementById('out').innerHTML = '';

    // Start the timer
    let date = new Date();
    startTime = date.getSeconds();
}

function stop() {
    document.getElementById("emoji").style.visibility = "visible";
    let date = new Date();
    stopTime = date.getSeconds();
    let time = stopTime - startTime;
    let answer = document.getElementById("usersText").value;
    let output;
    if (answer == sentence) {
        output = "Good job. You typed the text correctly.\n";
        document.getElementById("emoji").src = `/images/happy_face.jpg`;
    } else {
        output = `Sorry, you have entered the text incorrectly.\n 
            You typed: ${answer} \n You should have typed: ${sentence} \n`;
        document.getElementById("emoji").src = `/images/sad_face.jpg`;
    }

    output += `Your total time was ${time} seconds.`;
    document.getElementById("out").innerText = output;


}

