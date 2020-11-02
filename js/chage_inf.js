$(".log_btn").click(function(e){
	e.preventDefault();
 $(".chage_form").show();	
});

$(".cen1").click(function(e){
	e.preventDefault();
 $(".chage_form").hide();	
});

$(".chg_btn_1").click(function(e){
	e.preventDefault();
 alert("인증메일이 전송되었습니다.")
});

$(".log_btn2").click(function(e){
	e.preventDefault();
 $(".chage_form2").show();	
});

$(".cen2").click(function(e){
	e.preventDefault();
 $(".chage_form2").hide();	
});
$(".chg_btn_3").click(function(e){
	e.preventDefault();
 alert("비밀번호가 변경되었습니다.")
});

$(".out").click(function(e){
	e.preventDefault();
 $(".cencel").show();
 $(".cencel").css("z-index","999");
});

$(".close2").click(function(e){
	e.preventDefault();
 $(".cencel").hide();	
});

$(".yes").click(function(e){
	e.preventDefault();
 alert ("탈퇴 처리 되었습니다.")
});

$(".no").click(function(e){
	e.preventDefault();
 $(".cencel").hide();	
});

