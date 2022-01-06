
<?php
session_start();
$username=$_SESSION['username'];

//Database Information

$database_connection = mysqli_connect("localhost", "root", "") or die();
$select_database = mysqli_select_db($database_connection, "warrior") or die();
if (isset($_POST['re_password']))
	{
	$old_pass = $_POST['old_pass'];
	$new_pass = $_POST['new_pass'];
	$re_pass = $_POST['re_pass'];
	$password_query = mysqli_query($database_connection, "select * from users where username='$username'");
	$password_row = mysqli_fetch_array($password_query);
	$database_password = $password_row['password'];
	if ($database_password == $old_pass)
		{
		if ($new_pass == $re_pass)
			{
			$update_pwd = mysqli_query($database_connection,"update users set password='$new_pass' where username='$username'");
			echo "<script>alert('Update Sucessfully'); window.location='welcome.php'</script>";
			}
		  else
			{
			echo "<script>alert('Your new and Retype Password is not match'); window.location='welcome.php'</script>";
			}
		}
	  else
		{
		echo "<script>alert('Your old password is wrong'); window.location='welcome.php'</script>";
		}
	}
 
?>



<div style="width:30%; text-align: center; margin-left:400px; margin-bottom: 200px;">


    <form method="post" action="updatePassword.php">
       <div>
          <label style="color:blue;">Old Password</label>
          <input type="password" name="old_pass" placeholder="Old Password . . . . .">
       </div>
       <div>
          <label style="color:blue;">New Password</label>
          <input type="password" name="new_pass" placeholder="New Password . . . . .">
       </div>
       <div>
          <label style="color:blue;">Re-Type New Password</label>
          <input type="password" name="re_pass" placeholder="Re-Type New Password . . . . .">
       </div>
       <button type="submit" name="re_password">Submit</button>
    </form>
 </div>