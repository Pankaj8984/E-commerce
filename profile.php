<?php
session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true ){
  header("location: login.php");

  exit;
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
</head>
<body>
   
Welcome - $_SESSION['username'] 
       

    </div>
    
</body>
</html>