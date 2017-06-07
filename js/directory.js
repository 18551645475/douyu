//头部导航列表
$('.navbar>li>a').click(function(e){
    $(this).addClass("checked").parent().siblings().children().removeClass("checked")
});

//左侧栏目模块
$(document).ready(function(){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-100;
    $('#left-box').height(leftHeight);
});
$(window).resize(function (){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-100;
    $('#left-box').height(leftHeight);
});
$(".column>ul>li").click(function(){
    $(this).addClass("checked").siblings().removeClass("checked")
});
//right-container
$(document).ready(function(){
    var innerWidth=window.innerWidth;
    var mainWidth=parseFloat(innerWidth)-270;
    $('#right-box').width(mainWidth);
});
$(window).resize(function (){
    var innerWidth=window.innerWidth;
    var mainWidth=parseFloat(innerWidth)-270;
    $('#right-box').width(mainWidth);
});
$(document).ready(function(){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-51;
    $('#right-box').height(leftHeight);
});
$(window).resize(function (){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-51;
    $('#right-box').height(leftHeight);
});

$("#right-container>.title>ul>li>a").click(function(e){
    e.preventDefault();
    $(this).addClass("checked").parent().siblings().children().removeClass("checked")
});
//#right-container>.title>.show-all>a:hover{
//    background:url(../image/show_all.png) no-repeat 0 -16px;
//}
$("#right-container>.title>.show-all>a").click(function(e){
    e.preventDefault();
    $(this).toggleClass("selected");
});
//页面加载完，显示全部目录
window.onload=function(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                var pic=data[i].pic;
                html+=`
                <li>
                    <a href="#">
                        <img src="image/${pic}.jpg">
                        <p>${data[i].txt}</p>
                    </a>
                </li>
                `
            }
            $(".all-directory>ul").html(html);
        }
    })
};
function item1(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==1){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item2(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==2){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item3(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==3){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item4(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==4){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item5(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==5){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item6(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==6){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item7(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==7){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
function item8(){
    $.ajax({
        type:'get',
        url:'data/directory.php',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++) {
                var pic = data[i].pic;
                if(data[i].pid==8){
                    html += `
                    <li>
                        <a href="#">
                            <img src="image/${pic}.jpg">
                            <p>${data[i].txt}</p>
                        </a>
                    </li>
                    `
                }
            }
            $(".all-directory>ul").html(html);
        }
    })
}
//模态框
//login
$("#modal-box>.loginbox>.loginbox-close").click(function(){
    $("#modal-box").css({"display":"none"})
});
$("#modal-box>.registerbox>.loginbox-close").click(function(){
    $("#modal-box").css({"display":"none"})
});
$("#usercenter>.login>.login-lgn").click(function(){
    $("#modal-box").css({"display":"block"});
    $("#modal-box>.loginbox").css({"display":"block"})
});
$("#usercenter>.login>.register-rgs").click(function(){
    $("#modal-box").css({"display":"block"});
    $("#modal-box>.registerbox").css({"display":"block"})
});

$(".loginbox>.loginbox-hd>p>a").click(function(e){
    e.preventDefault();
    console.log("1");
    $("#modal-box>.loginbox").css({"display":"none"});
    $("#modal-box>.registerbox").css({"display":"block"})
});
$(".registerbox>.loginbox-hd>p>a").click(function(e){
    e.preventDefault();
    $("#modal-box>.loginbox").css({"display":"block"});
    $("#modal-box>.registerbox").css({"display":"none"})
});