


function log(message) {
	$("#logText").append(">" + message + "<br>");
	$("#log").scrollTop($("#log")[0].scrollHeight);
}
