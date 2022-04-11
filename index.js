$(".lgBtn").click(function () {
	var pass1 = $(".ps").val();
	var pass2 = $(".cnfPs").val();
	if (pass1 != "" && pass2 != "") {
		if (pass1 == pass2) {
			alert("password confirmed");
		} else {
			alert("password not confirmed! ");
		}
	} else {
		alert("Please enter a password");
	}
});

$(".btn2").click(function () {
	$(".p1").hide(2000);
});

$(".btn3").click(function () {
	$(".p1").show(2000);
});

$(".btn4").click(function () {
	$(".p1").toggle(200);
});

$(".btn5").click(function () {
	$(".img1").fadeOut();
});

$(".btn6").click(function () {
	$(".img1").fadeIn();
});

$(".btn7").click(function () {
	$(".img1").fadeToggle(2000);
});

$(".btn8").click(function () {
	$(".img1").fadeTo(2000, 0.2);
});

$(".btn9").click(function () {
	$(".img1").slideUp(2000);
});

$(".btn10").click(function () {
	$(".img1").slideDown(2000);
});
$(".btn11").click(function () {
	$(".img1").slideToggle();
});
