<?php
    header("Content-Type:application/json;charset=utf-8");
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $conn=mysqli_connect('127.0.0.1','root','','douyu');
    mysqli_query($conn,'SET NAMES UTF8');
    $sql="SELECT * FROM t_user";
    $result=mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
     foreach($rows as $k=>$v){
        if($v['uname']==$uname&&$v['upwd']==$upwd){
            echo "登录成功";
        }else{
            echo "登录失败";
        }
     }
?>