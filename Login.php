<?php
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username === "Zein" && $password === "Zein123"){
        echo "success";
    }else{
        echo "error";
    }
}
?>
