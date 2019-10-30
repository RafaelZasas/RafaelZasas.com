let words = [];
let sentence;
let startTime;
let stopTime;
let first_time;

function init() {
    document.getElementById("emoji").style.visibility = "hidden";
    first_time=true;
    setBeginner();
}

function clear() { // function to clear the " Enter your answer here: " from usersText
    document.getElementById("usersText").value = "";
}

function reset() {
    document.getElementById("usersText").value = "";
    document.getElementById("GivenText").value = "";
    document.getElementById("emoji").style.visibility = "hidden";
    document.getElementById("out").innerText = "";
    startTime=0;    stopTime=0;
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
    let date = new Date();
    startTime = date.getSeconds();
}

function stop() {
    document.getElementById("emoji").style.visibility = "visible"; // show the <input> tag
    let date = new Date();
    stopTime = date.getSeconds();
    let time = stopTime - startTime; // duration of typing
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

