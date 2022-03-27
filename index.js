$(".lgBtn").click(function () {
	var pass1 = $(".ps").val();
	var pass2 = $(".cnfPs").val();
	if (pass1 != "" && pass2 != "") {
		if (pass1 == pass2) {
			alert("password confirmed");
		} else {
			alert("password not confirmed!");
		}
	} else {
		alert("Please enter a password");
	}
});
