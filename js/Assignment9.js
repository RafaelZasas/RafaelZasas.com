/*
window.onload = function() {
	//TASK: FETCH A TERM
	fetchTerm();
};
*/

function fetchTerm() {
    var part = document.getElementById("part").value;  // select which culinary topic to quiz about
    var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = createPossibleAnswers;
    myXMLRequest.open("GET", "Assignment9.php?part=" + part, true); // open the request to the php
                                                                                    // and attach the quiz topic
    myXMLRequest.send();
}

function createPossibleAnswers() {
    //TASK 1: CLEAR OUT ANY PREVIOUS OUTPUT
    document.getElementById("result").innerHTML = "";  // set the output to nothing

    var json = JSON.parse(this.responseText);
    //TASK 1: GET THE WORD
    document.getElementById("word").innerHTML = "What answer best applies to the " + json.part + ":  " + json.word;

    //TASK 2: GET THE MULTIPLE CHOICE ANSWERS
    document.getElementById("choices").innerHTML = "";
    for (var i = 0; i < json.choices.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = json.choices[i].definition;
        button.className = json.choices[i].correct ? "correct" : "incorrect";
        button.onclick = showResult;
        button.style.display = "block";
        document.getElementById("choices").appendChild(button);
    }
}

function showResult() {
    document.getElementById("result").innerHTML = "You are " + this.className;
    //fetchTerm();
}
