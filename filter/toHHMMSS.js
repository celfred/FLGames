angular.module('FLGames').filter('toHHMMSS', function() {
	return function(input,arg) {
    var sec_num = parseInt(input, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time;
    if (hours > 0) {
      time = hours+':'+minutes+':'+seconds;
    } else {
      time = minutes+':'+seconds;
    }

    return time;
	};
});
