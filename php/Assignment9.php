<?php

$selectedCategory = $_REQUEST['q'];  // food category that the user selected from the list
//TASK 1: Open and read the file into array
$line = file("culinaryQuizText.txt");



do { // keep choosing new lines so long as the current line isn't the selected category
    list($food_name, $category, $true_definition) = preg_split("/[\t]/", trim($line[array_rand($line)]));
} while ($category != $selectedCategory);

$correctDefn= array(  // the correct defn. obviously its the correct one.
    "definition"=>$true_definition,
    "correct"=>true
);



do{
  $first_random=preg_split("/[\t]/", trim($line[array_rand($line)])); // first random line
} while($first_random[2]==$true_definition); // ensures first random is not same as the true defn

$randomDefn1 = array( // first random defn. obviously its not the correct
    "definition"=>$first_random[2],
    "correct"=>false
);



do{ // ensures 2nd random isn't same as true defn or first random
  $second_random=preg_split("/[\t]/", trim($line[array_rand($line)]));
} while($second_random[2]==$true_definition || $second_random[2]== $first_random[2]);

$randomDefn2 = array(  // second random defn. obviously its not the correct
    "definition"=>$second_random[2],
    "correct"=>false
);




// an array that contains the key value pairs of the definitions and their parity
$choices = array($randomDefn1,$randomDefn2,$correctDefn);


// json obj containing category and name for question and choices for buttons
$json = array(
    "category" => $selectedCategory,
    "fname" => $food_name,
    "choices"=>$choices

);

//TASK 4: Return the JSON object
header("Contenttype:Application/json");
print(json_encode($json));

?>
