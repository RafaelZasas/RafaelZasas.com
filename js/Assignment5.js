let conversion;

function convert() {
    var input = $("length").value;
    let output;
    if (conversion === "Centimeters"){
        output=input*2.54;
        $("output").innerHTML = `${input} inches converts to ${output} cm`;
    } else{
        output=input*0.393701;
        $("output").innerHTML = `${input} centimeters converts to ${output} in`;
    }

}

function setCm() {
     $("unitLabel").innerHTML = "Inches"; // change the label to show that were converting from inches
     conversion="Centimeters";
}
function setInches() {
     $("unitLabel").innerHTML = "Centimeters"; // change the label to show that were converting from centimeters
    conversion="Inches";
}
var $ = function (id) {
    return document.getElementById(id)
};




                // BULLS EYE JS

function drawBullsEye() {
    var canvas = document.getElementById('canvas');
    var canvasContext = canvas.getContext('2d');

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight*2;

    var startPt = 0;
    var endPt = 2 * Math.PI;
    canvasContext.beginPath();
    canvasContext.arc(400, 150, 100, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,255,0)";
    canvasContext.fill();
    canvasContext.closePath();

    canvasContext.beginPath();
    canvasContext.arc(400, 150, 70, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,245,0)";
    canvasContext.fill();
    canvasContext.closePath();

    canvasContext.beginPath();
    canvasContext.arc(400, 150, 35, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,235,0)";
    canvasContext.fill();
    canvasContext.closePath();

}


function changeShade() {
    var sliderValue= parseInt(document.getElementById("green").value);
    var canvas = document.getElementById('canvas');
    var canvasContext = canvas.getContext('2d');
    var startPt = 0;
    var endPt = 2 * Math.PI;
    var c2= sliderValue-10;
    var c3 =sliderValue-20;

    if(sliderValue != "0"){
        canvasContext.beginPath();
        canvasContext.arc(400, 150, 100, startPt, endPt);
        canvasContext.fillStyle= `rgb(0,${sliderValue},0)`;
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 70, startPt, endPt);
        canvasContext.fillStyle= `rgb(0,${c2},0)`;
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 35, startPt, endPt);
        canvasContext.fillStyle= `rgb(0,${c3},0)`;
        canvasContext.fill();
        canvasContext.closePath();
    }

}

                    // LEVI CURVE JS

function  drawIt() {
    var canvas = document.getElementById('canvas');
    var canvasContext = canvas.getContext('2d');

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight*2;

    // DRAW ON THE CANVAS
    initializeCurve(canvas,canvasContext);

}

function initializeCurve(canvas, canvasContext) {

    // GET THE LEVEL FROM THE UI
    var level = document.getElementById('nlevels').value;
    // SET THE BEGINNING XY AND ENDING XY POINTS
    var y1 = canvas.height/6;
    var y2 = canvas.height/2;
    var x1 = canvas.width/2;
    var x2 = x1;
    // CALL THE RECURSIVE FUNCTION
    drawCurve(canvasContext, x1,y1,x2,y2, level);
}

function drawCurve(canvasContext, x1,y1,x2,y2, level) {
    canvasContext.strokeStyle="#FF0000";
    if (level <=1){
        canvasContext.beginPath();
        canvasContext.moveTo(x1,y1);
        canvasContext.lineTo(x2,y2);
        canvasContext.stroke();
    }
    else{
        // COMPUTE THE NEW POINT
        var xn = (x1+x2)/2 +(y1-y2)/2;
        var yn= (y1+y2)/2 +(x2-x1)/2;
        drawCurve(canvasContext,x1,y1,xn,yn,level-1);
        drawCurve(canvasContext,xn,yn,x2,y2,level-1);
    }
}


