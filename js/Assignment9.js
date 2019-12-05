

function fetchTerm() {
    var selectedCategory = document.getElementById("type").value;  // select which culinary topic to quiz about
    //console.log(selectedCategory);
    var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = createPossibleAnswers;
    myXMLRequest.open("GET", "/php/Assignment9.php?q="+selectedCategory, true); // open the request to the php
                                                                                    // and attach the quiz topic
    myXMLRequest.send();
}

function createPossibleAnswers() {
    //TASK 1: CLEAR OUT ANY PREVIOUS OUTPUT
    document.getElementById("result").innerHTML = "";  // set the output to nothing

    var json = JSON.parse(this.responseText);
    //TASK 1: GET THE WORD
    document.getElementById("word").innerHTML = "What answer best applies to the " + json.category + ":  " + json.fname;

    //TASK 2: GET THE MULTIPLE CHOICE ANSWERS
    document.getElementById("choices").innerHTML = ""; // clears the choices area

    // console.log(
    //     json.choices[0].definition,
    //     json.choices[1].definition,
    //     json.choices[2].definition
    //     );

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

}
