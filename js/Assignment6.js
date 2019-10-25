function init_run_aid() {
    document.getElementById("tbl").style.visibility = "hidden";
}


function compute_run_aid() {
    document.getElementById("tbl").style.visibility = "visible";

    var distance = document.getElementById("txt1").value;
    var pace = document.getElementById("txt2").value;

    var min = parseInt(pace.substr(0, pace.indexOf(':')));
    var sec = parseInt(pace.substr(pace.indexOf(':') + 1));


    var seconds_per_mile = min * 60 + sec; // units of (s/m)
    var speed = 1 / seconds_per_mile; // units of  (m/s)

    populate_table(distance, speed);

}

function populate_table(distance, speed) {
    var D = parseInt(distance);
    distance=parseFloat(distance);
    var markup = "";
    for (let i = 1; i <= D; i++) {
        markup += `<tr><td>${i}</td><td>${mileTime(i,speed)}</td></tr>`;
    }
    if(distance %1 !=0){
        markup+= `<tr><td>${distance}</td><td>${mileTime(distance,speed)}</td></tr>`
    }

    document.getElementById("tbl").innerHTML = markup;
}

function mileTime(distance, speed) {
    var time = distance / speed; // time to complete the race IN SECONDS
    var total_h = parseInt(time / 3600);  // parse int ensures we only get the whole num (ie just the minutes)
    var total_m = parseInt(time / 60) % 60; // time/ 60 gives us the minutes equivalent. % 60 remainder of
    var total_s = time - total_h * 3600 - total_m * 60;
    if (total_h < 10) {
        var h = "0" + total_h;
    } else h = "" + total_h;
    if (total_m < 10) {
        var m = "0" + total_m;
    } else m = "" + total_m;
    if (total_s < 10) {
        var s = "0" + total_s;
    } else s = "" + total_s;

    return `${h}:${m}:${s}`;

}

 /*      END OF RUNNER AID JS       */



function puzzle(){
    // fill the table with the images
    document.getElementById("0").innerHTML = "<img src='/images/Assignment7/ass6p1.png' id='p1'>";
    document.getElementById("1").innerHTML = "<img src='images/Assignment7/ass6p3.png' id='p3'>";
    document.getElementById("2").innerHTML = "<img src='images/Assignment7/ass6p2.png' id='p2'>";

    document.getElementById("3").innerHTML = "<img src='images/Assignment7/ass6p0.png' id='p0'>";
    document.getElementById("4").innerHTML = "<img src='images/Assignment7/ass6p5.png' id='p5'>";
    document.getElementById("5").innerHTML = "<img src='images/Assignment7/ass6p8.png' id='p8'>";

    document.getElementById("6").innerHTML = "<img src='images/Assignment7/ass6p6.png' id='p6'>";
    document.getElementById("7").innerHTML = "<img src='images/Assignment7/ass6p4.png' id='p4'>";
    document.getElementById("8").innerHTML = "<img src='images/Assignment7/ass6p7.png' id='p7'>";
}

function moveTo(index){
    // variables to hold the indicies of surrounding cells
    var right = -1;  var left = -1; var above = -1; var below = -1;
    above = index - 3; below = index + 3;

    // if statements to find the indicies of surrounding cells. checks to see if
    // the clicked-on cell is a center cell, a left cell, or a right cell.
    if(index == 1 || index == 4 || index == 7){
        right = index + 1;
        left = index - 1;
    }
    else if(index == 0 || index == 3 || index == 6){
        right = index + 1;
    }
    else{
        left = index - 1;
    }

    // array to hold the different indicies of table cells around the one clicked on
    indicies = [];
    indicies[0] = right; indicies[1] = left; indicies[2] = above; indicies[3] = below;
    var innH = "";
    var found = false;

    // loop through the array to check the different indicies until the one with
    // the blank image is found. if it's found, it gets sent to another method
    // to switch the two images. if not found, nothing happens.
    for(var i = 0; i < 4 && !found; i++){
        var ind = indicies[i];
        if(ind >= 0 && ind <= 8){
            innH = document.getElementById(ind).innerHTML;
            if(innH.charAt(22) == '8'){
                changeImage(index, ind);
                found = true;
            }
        }
    }
}

function changeImage(index, blankIn){
    // get the inner html of the two table cells and switch them
    var innerIndex = document.getElementById(index).innerHTML;
    var innerBlank = document.getElementById(blankIn).innerHTML;
    document.getElementById(blankIn).innerHTML = innerIndex;
    document.getElementById(index).innerHTML = innerBlank;
}
