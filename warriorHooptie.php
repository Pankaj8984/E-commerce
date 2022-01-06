<?php
    include("nav.php");
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="WH.css">
    <title>WarriorHooptie</title>


    <style>
*{
	padding: 0;
	margin: 0;
}
.second {
	background-image: url("images/21.jpg");
	width: 100%;
	background-repeat: no-repeat; 
    height: 750px;
    background-size: cover;
    background-position: center;
    animation: animate 15s ease-in-out infinite;

}
@keyframes animate{
	0%{
		background-image: url("images/17.jpg");
	}
	50%{
		background-image: url("images/31.jpg");
	}
	70%{
		background-image: url("images/32.jpg");
	}
	
}

body {
	color: #404040;
	font-family: 'Helvetica', Arial, sans-serif;
	font-size: 18px;
	line-height: 1.5;
  background: hsl(0, 0%, 96%);
}

h1 {
  color: black;
  
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  font-style: italic;
}

.main-area {padding: 2em;}
.cards p {margin-bottom: 1.5em;}
.cards h2 {font-size: 1.5em;}

img {
	display: block;
	border: 0;
	width: 100%;
	height: 200px;
}

/* Flexbox */
@media screen and (min-width: 50em) {
    
    .outer-wrap {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    
    .content {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    
    .main-area {
        -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
                flex: 1 1 auto;
        -webkit-order: 1;
            -ms-flex-order: 1;
                order: 1;
    }
  
}

/* Card Based Layout - Base styles */

.card {
	background: white;
	margin-bottom: 2em;	
}

.card a {
	color: black;
	text-decoration: none;
}

.card a:hover {
	box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
  transition: all 0.4s;
}

.card-content {
	padding: 1.4em;
}

.card-content h2 {
	margin-top: 0;
	margin-bottom: .5em;
	font-weight: normal;
}

.card-content p {
	font-size: 95%;
}

/* Flexbox stuff */

@media screen and (min-width: 40em) {
    .cards {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
        -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
                justify-content: space-between;
        margin-top: -1em;
    }

    .card {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 0 1 calc(50% - .5em);
            -ms-flex: 0 1 calc(50% - .5em);
                flex: 0 1 calc(50% - .5em);
        margin-bottom: 1em;
    }
}

@media screen and (max-width: 39.9em) {
  
  .main-area {padding: 0em;}
  .card {margin-bottom: 0em;}	
}

@media screen and (min-width: 60em) {
    .cards {
        margin-top: inherit;
    }
    
    .card {
        -webkit-flex: 0 1 calc(33% - 1em);
            -ms-flex: 0 1 calc(33% - 1em);
                flex: 0 1 calc(33% - 1em);
        margin-bottom: 2em;
    }
}

body{
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(48, 46, 46);
            background-color: rgba(224, 217, 217, 0.863);
        }
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 25px;
        }
        hr{
            width: 80%;
        }
        h2{
            font-size: 20px;
        }
        .contact-items{
            display: flex;
            margin: 30px auto;
            flex-wrap: wrap;
            align-items: center;

        }
        .customer-care,.write-us,.sales-market{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 28%;
            margin: 30px auto;
            padding: 35px 15px;
            border-radius: 15px;
            text-align: center;
            min-width: 250px;
            
        }
        .customer-care{
            height: 300px;
            box-shadow: 0 15px 15px green;
            border: 1px solid green;
        }
        .write-us{
            height: 300px;
            box-shadow: 0 15px 15px red;
            border: 1px solid red;
        }
        .sales-market{
            height: 300px;
            box-shadow: 0 15px 15px blue;
            border: 1px solid blue;
        }
        p{
            font-size: 15px;
        }
        button{
            padding: 8px 16px;
            font-size: 17px;
            border-radius: 25px;
            border: none;
            margin: 15px auto;
            cursor: pointer;
            color: rgb(255, 255, 255);
        }
        button:hover{
            color: gray;
        }
        #cust-care{
            background: green;

            box-shadow: 0 0 5px black;
        }
        #write{
            background: rgb(187, 15, 15);

            box-shadow: 0 0 5px black;
        }
        #sales{
            background: blue;
            box-shadow: 0 0 5px black;
        }
        a{
            font-size: 16px;
        }
        .customer-care a{
            color: green;
            text-shadow: 0 0 2px rgba(73, 129, 80, 0.637);
        }
        .sales-market a{
            color: blue;
            text-shadow: 0 0 2px rgba(76, 62, 158, 0.637);
        }

        .footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:20px;
  width:36px;
  height:36px;
  line-height:36px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  box-shadow:0 0 0 1px rgba(255,255,255,0.4);
  margin:0 8px;
  color:#fff;
  opacity:0.75;
}

.footer-dark .item.social > a:hover {
  opacity:0.9;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.3;
  font-size:13px;
  margin-bottom:0;
}


</style>

  </head>
  
<body>
<div class="second">
		<div class=" quotes">
			
		</div>
	</div>
    
    <div class="outer-wrap">
      <h1>Our Partners</h1>
      <div class="content">
        
        <main class="main-area">
          <section class="cards">
            <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img src="images/tata.png">
                        </picture>
                        <div class="card-content">
                            <h2>Ashok Leyland Defence Systems</h2>
                            <p>Ashok Leyland Defence Systems was floated on 18 March 2008. Hinduja Group's flagship company Ashok Leyland holds 26 </p><p>percent in the newly formed company. Ashok Leyland has been involved in the design, </p><p>development and manufacture of vehicles for the Indian armed forces. Ashok Leyland is ranked among the world's largest producers of medium duty defence vehicles today.[1]</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img src="images/mahindra.png">
                        </picture>
                        <div class="card-content">
                            <h2>Mahindra & Mahindra</h2>
                            <p>Every time the society needed us, we stepped in and helped create a new industry. </p><p>In 1945, our journey commenced with us getting into the steel business, and over time, we expanded to 22 key industries. A need for</p><p> change in the agricultural practices pushed us to foray into that sector right before the agriculture revolution began in India</p>
                        </div><!-- .card-content -->
                    </a>
                </article><!-- .card -->

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img src="images/beml.png">
                        </picture>
                        <div class="card-content">
                            <h2>BEML LIMITED</h2>
                            <p>Being India's leading defence equipmenteast with state-of-the-art military equipment.</p><p> The company manufactures variants of BEML Tatra vehicle for all terrain operations including Bridge</p><p> Layer, Field Artillery Tractor, Medium & Heavy Recovery Vehicle, Pontoon Mainstream Bridge Systems, Crash Fire Tenders, Mobile Mast Vehicle, etc. </p>
                    </a>
                </article><!-- .card -->
                <div>
                    
                    <div class="container">
        <h1>Contact Us</h1>
        <hr>
        <h2>Have any questions? We'd love to hear from you</h2>
        <div class="contact-items">
            <div class="customer-care">
                <h3>Customer Care</h3>
                <p>Our Support team is spread all over the world to give you fast response</p>
                <button id="cust-care"> Submit a Request</button>
                <a href="#"> Frequently asked Questions</a>
            </div>
            <div class="write-us">
                <h3>Write Us</h3>
                <p> You can write us if you have any queries</p>
               <a href="#"> <button id="write">Write</button></a>
          <!-- <a href="./contact-form.html"> <button id="write">Write</button></a>  u-->
            </div>
            <div class="sales-market">
                <h3> Sales and Marketing</h3>
                <p>Get in touch with our sales and marketing team</p>
                <button id="sales">Contact Sales</button>
                <a href="#">View Plans</a>

            </div>
        </div>
    </div>
                </div>

                
            
            </section><!-- .cards -->
        </main>
      </div><!-- .content -->
    </div><!-- .outer-wrap -->
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Hardware Parts</a></li>
                            <li><a href="#">Software Testing</a></li>
                            <li><a href="#">Servicing</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">KP © 2021</p>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>



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