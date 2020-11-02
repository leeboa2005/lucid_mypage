$(".coupon_down").click(function(){
	$(".coupon").show();
	$(".coupon").css("z-index","9999");
	$(".popup_bg").show();
	});
	
$(".close2").click(function(){
$(".coupon").hide();
$(".popup_bg").hide();
});

$(".click_m").click(function(){
	alert("적립된 마일리지가 없습니다.")
	});