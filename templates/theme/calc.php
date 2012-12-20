<?php
      $foot_cm = "30.48";
      $inch_cm = "2.54";
      $pound_kg = 45.36/100;
      
      $feet2cm = 5*$foot_cm;
      $inch2cm = 10*$inch_cm;
      
      $height = $feet2cm + $inch2cm;
      $weight = intval(172)*$pound_kg;
            
      print (round($height)."<br/>");
      print(round($weight));
?>