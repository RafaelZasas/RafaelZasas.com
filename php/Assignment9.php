<?php

$selectedCategory = $_REQUEST['q'];
//TASK 1: Open and read the file into array
$line = file("culinaryQuizText.txt");

//TASK 2: Randomly select a food type and definition

do { // keep choosing new lines so long as the current line isn't the selected category
    list($food_name, $category, $food_definition) = preg_split("/[\t]/", trim($line[array_rand($line)]));
} while ($category != $selectedCategory);

$randomDefn1 = array(
    "definition"=>preg_("/([^\t^\t]*)$/", trim($line[array_rand($line)])),
    "correct"=>false
);

$randomDefn2 = array(
    "definition"=>preg_split("/([^\t]*)$/", trim($line[array_rand($line)])),
    "correct"=>false
);





$choices = array($randomDefn1,$randomDefn2);

// using regex to split the lines into the food term the category (part) and defn

//TASK 3: Create a JSON object
$json = array(
    "category" => $selectedCategory,
    "fname" => $food_name,
    "defn" => $food_definition,
    "choices"=>$choices

);

//TASK 4: Return the JSON object
header("Contenttype:Application/json");
print(json_encode($json));

?>
