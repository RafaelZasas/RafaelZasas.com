let words = [];
let sentence;
let startTime;
let stopTime;
let time;
let first_time;

function init() {
    document.getElementById("emoji").style.visibility = "hidden";
    first_time=true;
    setBeginner();
}


function reset() { // clear all the old games text and img.
    document.getElementById("usersText").value = "";
    document.getElementById("GivenText").value = "";
    document.getElementById("emoji").style.visibility = "hidden";
    document.getElementById("out").innerText = "";
    startTime=0;
}

function setBeginner() {
    if (first_time===false){
        reset()
    } else first_time=false;
    words = [
        "Pablo", "random", "officer", "police", "banana", "apples", "roast", "corndog",
        "tissues", "phone", "computer", "wallet", "bottle", "hidden"
    ];

}

function setAdvanced() {
    reset();
    words = ['perpetually', 'successful', 'exploitable', 'extravagant', 'unnecessary', 'Johannes', 'xylophone', 'Britannica', 'despicable', 'preposterous', 'pyromaniac'];
}

function start() {
    reset();  // clear all the previous text
    sentence = "";
    // create the practice sentence
    for (let i = 0; i < 4; i++) {
        sentence += words[Math.floor(Math.random() * 13)];
        if (i < 3)
            sentence += " ";
    }

    document.getElementById('GivenText').value = sentence; // populate the yellow <input> that user must repeat

    // Start the timer
    startTime = new Date();
}

function stop() {
    document.getElementById("emoji").style.visibility = "visible"; // show the <input> tag
    stopTime = new Date(); // end the timer
    time = ((stopTime - startTime)/1000).toFixed(2); // div by 1000 to strip the ms &  fround for float
    let answer = document.getElementById("usersText").value;
    let output;
    if (answer === sentence) {
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

