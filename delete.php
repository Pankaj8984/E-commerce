<?php
session_start();
include_once 'dbconnect.php';
$sql = "DELETE FROM users WHERE username='" . $_SESSION['username'] . "'";
if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Account Delete has been Sucessfull'); window.location='warriorHooptie.php'</script>";


} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
mysqli_close($conn);
?>