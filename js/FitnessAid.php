
//TASK 1: MAKE A CONNECTION TO THE DATABASE, DISPLAY ERROR FOR FAILED CONNECTIONS
//        Argument 1: IP address provided by GoDaddy
//        Argument 2: Database user with access privileges
//        Argument 3: Database password
//        Argument 4: Database Name
//        Argument 5: Port for MySQL, which is not hosted locally.
//NOTE: $mysqli = new mysqli("127.0.0.1", "username", "password", "database", 3306);

$mysqli = new mysqli("localhost", "class_database", "1234", "class_database");
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//TASK 2: GET FIRST NAME FROM THE FORM
$myName = $_POST["myName"];

//TASK 3: BUILD A STRING CONTAININ A MYSQL INSTRUCTION TO
//        SELECT ALL RECORDS CONTAINING THE FIRST NAME FROM THE FORM.
if ($myName != null){
  $sql = "SELECT FirstName, LastName, Email FROM ContactsTable WHERE FirstName = '$myName'";
}
else {
    $sql = "SELECT FirstName, LastName, Email FROM ContactsTable";
}

//TASK 4: USE THE ESTABLISHED DATABASE CONNECTION TO PROCESS THE DATABASE QUERY.
//        STORE THE RESULTS IN A VARIABLE.
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // OUTPUT DATA FOR EACH ROW
  while($row = $result->fetch_assoc()) {
    echo "email: " . $row["Email"]. "  Name: " . $row["FirstName"]. " " . $row["LastName"]. "<br>";
  }
} else {
  echo "0 results";
}
?>
