<?php

$showAlert = false;
$showError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
    
    include 'dbconnect.php';
    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];
    $exists=false;
    if($password == $cpassword && $exists==false){
      
    	$sql = "INSERT INTO `users` (`name`, `username`, `email`, `phone`, `password`) VALUES ('$name', '$username', '$email', '$phone', '$password')";

    	$result = mysqli_query($conn,$sql);
    	if($result ){
        
    		$showAlert = true;
        

    	}
  

    }
    else{
      $showError = "Password dont match";
    }
    
}
?>




<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="signup_page.css">
    <title>signup</title>
  </head>


<style>
  body {
    background-image: url(images/32.jpg);
    background-position: left;
}
.container{
  height: 500px;
  width: 400px
}
.text-center {
    width: 370px;
    color: white;
    padding: 12px;
    font-size: 31px;
    padding-bottom: 40px;
    font-family: fantasy;
}
.form-label{
  color: white;
}

.btn-primary {
    color: #fff;
    background-color: #859f37;
    margin-left: 48px;
    border-radius: 52%;
}


</style>











  <body >


  <?php require 'nav.php' ?>
  	<?php
  	if($showAlert){
     
        echo '<div class="alert alert-success" role="alert">
              <strong>Sucess!</strong>Your account is created and you can login.
              </div>';
    
  	}
  	 if($showError){
  		echo '<div class="alert alert-danger" role="alert">
              <strong>Error!</strong>'.$showError.'
              </div>';
  	}

    ?>

<div class="container my-3">
    	<h1 class="text-center">Be a Part by Signing Up</h1>
    	<form action="signup.php" method="post">
        <div class="mb-3">
		    <label for="name" class="form-label">Name</label>
		    <input type="text" class="form-control" id="name" name="name" require>
		    
		  </div>
		  <div class="mb-3">
		    <label for="username" class="form-label">Username</label>
		    <input type="text" class="form-control" id="username" name="username" require>
		    
		  </div>
          <div class="mb-3">
		    <label for="email" class="form-label">Email</label>
		    <input type="email" class="form-control" id="email" name="email">
		    
		  </div>
          <div class="mb-3">
		    <label for="phone" class="form-label">Phone Number</label>
		    <input type="text" class="form-control" id="phone" name="phone">
		    
		  </div>
		  <div class="mb-3">
		    <label for="password" class="form-label">Password</label>
		    <input type="password" class="form-control" id="password" name="password">
		  </div>

		  <div class="mb-3">
		    <label for="cpassword" class="form-label"> Confirm Password</label>
		    <input type="password" class="form-control" id="cpassword" name="cpassword">
		  </div>
		 <div class="text-center">
		  <button type="submit" class="btn btn-primary">Sign-up</button>
         </div>
        </form>
    	
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>