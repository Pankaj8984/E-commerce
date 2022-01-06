<?php
session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true ){
  header("location: login.php");
  exit;
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
     <link rel="stylesheet" href="welcome_page.css">
    <title>my Account</title>

   

  </head>
  <body>
  	<?php require 'nav.php' ?>
   

     <!-- Topic Cards -->
     <div id="cards_landscape_wrap-2">
        <div class="container" style="padding-top: 0px;padding-bottom:50px;"   > 
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/1.jpeg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>RG-31 Nyala</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : M75</li>
                                      <li>Weight : 3.6T</li>
                                      <li>AMT</li>
                                      <li>Price : Rs 75,000,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/2.jpg" alt="" />
                                </div>
                                <div class="text-container">                                    
                                <h6>GURU 712-(4)</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : L715</li>
                                      <li>Weight : 2.5T</li>
                                      <li>Automatic / AMT</li>
                                      <li>Price : Rs 50,000,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/3.jpg" alt="" />
                                </div>

                                <div class="text-container">
                                <h6>ARMOUR CARRIER</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : MN67</li>
                                      <li>Weight : 4.6T</li>
                                      <li>Automatic/AMT</li>
                                      <li>Price : Rs 5,989,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/4.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>STRYKER 56</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : NMY76</li>
                                      <li>Weight : 6.8T</li>
                                      <li>Semi-Automatic</li>
                                      <li>Price : Rs 105,000,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>


    <div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/5.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>BOEING 707</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : A768</li>
                                      <li>Weight : 12T</li>
                                      <li>Automatic/Self</li>
                                      <li>Price : Rs 73,345,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>

        
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/6.jpg" alt="" />
                                </div>
                                <div class="text-container">                                    
                                <h6>DYNAMICS F-16</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : AM5</li>
                                      <li>Weight : 36T</li>
                                      <li>Automatic/AMT/Fire</li>
                                      <li>Price : Rs 55,000,678</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/7.jpg" alt="" />
                                </div>

                                <div class="text-container">
                                <h6>GLOBEMASTER III</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : AJ787</li>
                                      <li>Weight : 66T</li>
                                      <li>Self/AMT</li>
                                      <li>Price : Rs 678,340,670</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/8.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>F-22 RAPTOR</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : WA455</li>
                                      <li>Weight : 14T</li>
                                      <li>Automatic/AMT/Burst</li>
                                      <li>Price : Rs 575,050,980</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>


    <div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/9.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>INS-TALWAR</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : N47</li>
                                      <li>Weight : 66T</li>
                                      <li>Turbo/Automtic/Autodrift</li>
                                      <li>Price : Rs 125,567,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/10.jpg" alt="" />
                                </div>
                                <div class="text-container">                                    
                                <h6>INS-BRAMAPUTRA</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : NVM5</li>
                                      <li>Weight : 126T</li>
                                      <li>Autodrift/Turbo/SelfBurst</li>
                                      <li>Price : Rs 375,000,000</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/11.jpg" alt="" />
                                </div>

                                <div class="text-container">
                                <h6>INS-BEAS</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : NTM8</li>
                                      <li>Weight : 79T</li>
                                      <li>Automatic/AMT</li>
                                      <li>Price : Rs 987,340,780</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <a href="">
                        <div class="card-flyer">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src="images/12.jpg" alt="" />
                                </div>
                                <div class="text-container">
                                <h6>INS-GOMATI</h6>
                                    <ul style="color:black;"  >
                                      <li>Model : F-21</li>
                                      <li>Weight : 56T</li>
                                      <li>FullBurst/Turbo</li>
                                      <li>Price : Rs 275,000,996</li>
                                    </ul>
                                    <a href="buyer.php"><button type="button" class="btn btn-primary text-md-start">Buy</button></a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
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
