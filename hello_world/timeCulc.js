
var times = document.querySelectorAll('.pl-video .pl-video-time .timestamp span');
var total_time = 0;
for(var i=0; i < times.length; i++){
	var t = times[i].innerText;
	t = t.split(':');
	var min = parseInt(t[0]);
	var sec = parseInt(t[1]);
	total_time = total_time + min * 60 + sec;
}
console.log(total_time/60/60);
