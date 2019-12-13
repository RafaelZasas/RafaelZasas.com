function Register() {

   // obtain information
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (password.isNumeric()){
        alert("works");
        console.log("password check works");
    } else alert("Enter numbers only");



}

function Login() {

    // obtain information
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (password.isNumeric()){
        alert("works");
        console.log("password check works");
    } else alert("Enter numbers only");

}
