function Register() {

   // obtain information
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (isNaN(parseInt(password))){
        alert("works");
        console.log("password check works");
    } else {
        alert("Enter numbers only");
    }



}

function Login() {

    // obtain information
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (isNaN(parseInt(password))){ // if the password is not only numbers

        alert("Enter numbers only");
        console.log("password check works");

    } else  {
        alert("works");
    }

}
