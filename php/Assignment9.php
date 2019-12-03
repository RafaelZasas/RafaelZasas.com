<?php
  //TASK 1: Open and read the file into array
  $line = file("/culinaryQuizText.txt");

  //TASK 2: Randomly select a term and definition
  list($term, $category, $definition) = preg_split("/[\t]/", trim($line[array_rand($line)])); // using regex to split the lines

  //TASK 3: Create a JSON object
  $json = array(
    "definition" => $definition
    "term" => $term
  );

  //TASK 4: Return the JSON object
  header("Contenttype:Application/json");
  print(json_encode($json));

?>
