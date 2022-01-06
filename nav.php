<?php 
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
  $loggedin= true;
}
else{
  $loggedin = false;
}
  echo '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/warrior/welcome.php" style="height:50px;"><img src="images/logos.png" alt="" style="height: 85px;margin-top: -25px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"style="padding-left: 850px;">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ';
        
      if(!$loggedin){

        echo  '
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/warrior/warriorHooptie.php">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/warrior/warriorHooptie.php">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/warrior/warriorHooptie.php">About</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" href="/warrior/signup.php">Signup</a>
        </li>
      
         <li class="nav-item">
          <a class="nav-link active" href="/warrior/login.php">login</a>
        </li>';
      }
      if($loggedin){
        echo '<li class="nav-item">
          
        </li>
        <form class="d-flex">
        
        <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Welcome '.$_SESSION["username"].'
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <li><a class="dropdown-item" href="updatePassword.php">Change Password</a></li>
                <li><a class="dropdown-item" href="delete.php">Delete Account</a></li>
                <li><a class="dropdown-item" href="/warrior/logout.php">logout</a></li>
                
               
              </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/warrior/service.php">Service</a>
          </li>
        </form>'
        
        
        
        
        ;
        
      }
    
      echo '</ul>

    
      
  
    </div>
  
</nav>';
?>




    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
   
 