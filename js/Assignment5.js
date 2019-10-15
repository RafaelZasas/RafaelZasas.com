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
