$(document).ready(function() {

	var realTime = function() {
		$("#clock").html(moment().format());
	}
	
	setTimeout(realTime, 1000);
	
});