
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
//var leftHeight=parseFloat(outerHeight)-200;
//$('#left').height(leftHeight+'px');
$('.navbar>li>a').click(function(e){
    $(this).addClass("checked").parent().siblings().children().removeClass("checked")
});

//左侧栏目模块
$(".column>ul>li").click(function(){
    $(this).addClass("checked").siblings().removeClass("checked")
});


//页面主体main部分
$(document).ready(function(){
    var innerWidth=window.innerWidth;
    var mainWidth=parseFloat(innerWidth)-260;
    $('#main-box').width(mainWidth);
});
$(window).resize(function (){
    var innerWidth=window.innerWidth;
    var mainWidth=parseFloat(innerWidth)-260;
    $('#main-box').width(mainWidth);
});
$(document).ready(function(){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-51;
    $('#main-box').height(leftHeight);
});
$(window).resize(function (){
    var innerHeight=window.innerHeight;
    var leftHeight=parseFloat(innerHeight)-51;
    $('#main-box').height(leftHeight);
});

//鼠标悬停出现play图标
$("#main>.all-live>ul>li>a").mouseenter(function(){
    $(this).children('i').css({opacity:'1',transform:'translate(0,-50px)',transition:'all .3s'})
}).mouseleave(function(){
    $(this).children('i').css({opacity:'0',transform:'translate(0,0)',transition:'all .3s'})
});

$("#main>.title>ul>li>a").click(function(e){
    e.preventDefault();
    $(this).addClass("checked").parent().siblings().children().removeClass("checked")
});

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


