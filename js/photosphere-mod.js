$(document).ready(function(){
	console.log('test2')
	$("#photosphere-background").bind("mousewheel", function() {
	    return false;
	    console.log('test');
	});
});