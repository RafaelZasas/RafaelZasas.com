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

function onLoad() {
    var markup = '<img src="/images/oranges.jpg" alt="b00"/>';
    var button = document.getElementById("btn");
    button.innerHTML= markup;

}
