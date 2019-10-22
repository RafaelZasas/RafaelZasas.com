function init1() {
    document.getElementById("tbl").style.visibility = "hidden";
}


function num1() {
    document.getElementById("tbl").style.visibility = "visible";

    var distance = parseFloat(document.getElementById("txt1").value);
    var pace =  document.getElementById("txt2").value;

    var  min = parseInt( pace.substr(0, pace.indexOf(':'))) ;
    var sec = parseInt(pace.substr(pace.indexOf(':')+1));

    var seconds_per_mile = min*60+sec;
    var speed = 1/seconds_per_mile; // units of  (m/s)

    populate_table(distance,speed);

}

function mileTime(distance,speed) {
    var time= distance/speed; // time to complete the race IN SECONDS
    var total_h = parseInt(time/3600);
    var total_m = parseInt((time/60)%60);
    var total_s = time - total_h*3600 - total_m*60;
    if (total_h<10){
        var h="0"+total_h;
    } else  h=""+total_h;
    if (total_m<10){
        var m="0"+total_m;
    } else  m=""+total_m;
    if (total_s<10){
        var s="0"+total_s;
    } else  s=""+total_s;

    return `${h}:${m}:${s}`;

}

function populate_table(distance, speed) {
    var D = parseInt(distance);

    for (let i = 1; i <= D; i++) {
        document.getElementById(`d${i}`).innerHTML = ""+i;
        document.getElementById(`t${i}`).innerHTML = mileTime(i,speed);
    }

    document.getElementById(`dlast`).innerHTML = ""+distance;
    document.getElementById(`tlast`).innerHTML = mileTime(distance,speed);
}
