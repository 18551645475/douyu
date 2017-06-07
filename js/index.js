$('.navbar>li>a').click(function(e){
    $(this).addClass("checked").parent().siblings().children().removeClass("checked")
});

//right-items鼠标悬停出现边框图
$(".right-items>ul>li").on("click",function(){
    $(this).children().children(".txt").addClass('checked');
    $(this).siblings().children().children(".txt").removeClass("checked")
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