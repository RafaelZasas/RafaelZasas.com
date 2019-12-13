function Register() {

   // obtain information
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (!isNaN(parseInt(password))){ // IF IT IS A NUMBER
        //TASK 1: BUILD A QUERY STRING
        var queryString = "lab11c.php?firstName=" + firstName
            + "&lastname=" + lastName+"&email="+email+"&password="+password;

        //TASK 2: CREATE A HTTP REQUEST AND PROCESS IT
        var myXMLRequest = new XMLHttpRequest();
        //myXMLRequest.onload = displayQueryResults;
        myXMLRequest.open("GET", queryString, true);
        myXMLRequest.send();
    } else {
        alert("Enter numbers only");
    }






}

function Login() {

    // obtain information
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (!isNaN(parseInt(password))){ // if the password is not only numbers
        //TASK 1: BUILD A QUERY STRING
        var queryString = "lab11c.php?firstname=na&lastname=na&email="+email+"&password="+password;

        //TASK 2: CREATE A HTTP REQUEST AND PROCESS IT
        var myXMLRequest = new XMLHttpRequest();
        //myXMLRequest.onload = displayQueryResults;
        myXMLRequest.open("GET", queryString, true);
        myXMLRequest.send();
    } else  {
        alert("Enter numbers only");
    }

}
