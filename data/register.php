<?php
    header("Content-Type:application/json;charset=utf-8");
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $conn=mysqli_connect('127.0.0.1','root','','douyu');
    mysqli_query($conn,'SET NAMES UTF8');
    $sql="INSERT INTO t_user VALUES(NULL,'$uname','$upwd')";
    $result=mysqli_query($conn,$sql);
    if($result===true){
        echo '添加成功';
    }else echo '添加失败';
?>