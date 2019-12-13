
//TASK 1: MAKE A CONNECTION TO THE DATABASE, DISPLAY ERROR FOR FAILED CONNECTIONS
//        Argument 1: IP address provided by GoDaddy
//        Argument 2: Database user with access privileges
//        Argument 3: Database password
//        Argument 4: Database Name
//        Argument 5: Port for MySQL, which is not hosted locally.
//NOTE: $mysqli = new mysqli("127.0.0.1", "username", "password", "database", 3306);

$mysqli = new mysqli(
"private-fitnessaid-do-user-6519810-0.db.ondigitalocean.com", //host name
 "doadmin",  // username
  "sufkmm8xx69dtx6l ",  //psssword
   "fitnessaid",  // database name
   "25060" //port
   );

if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//TASK 2: GET FIRST NAME FROM THE FORM
$FirstName = $_REQUEST["firstname"];
$FirstName = $_REQUEST["lastname"];
$FirstName = $_REQUEST["email"];
$FirstName = $_REQUEST["password"];

//TASK 3: BUILD A STRING CONTAINING A MYSQL INSTRUCTION TO
//        SELECT ALL RECORDS CONTAINING THE FIRST NAME FROM THE FORM.


  $sql = "SELECT password FROM membership WHERE FirstName = '$FirstName' "; // single quotes is computed 



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
