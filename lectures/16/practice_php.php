<?php

$A = array("Reducing carbon dioxide levels.","Increasing humidity.","Reducing levels of certain pollutants, such as benzene and nitrogen dioxide.",
           "Reducing airborne dust levels.","Keeping air temperatures down.","Improve air quality.", "Make people calmer and happier",
           "Speed up recovery from illness.","Save energy.", "Absorb noise.");

echo "Ten Benifits of Planting:";

for($i=0; $i < 10;$i++)
{
   echo "<li>";
        echo $A[$i];
    echo "</li>";
}


?>