$(document).ready(function(){
	$(".top-nav a, .site-avatar").click(function(event){  //site-avatar is for the home logo

		event.preventDefault();
		var isHome = $(this).hasClass("site-avatar");

		if (isHome) {  // case when the home logo is clicked
			var url="/";
			var title="{{site.title}}"
			var id="";

		} else { 								// case when anything but the home logo is clicked
			var id =$(this).attr('id');
			var url;
			var title;
		}

		defaultCreateInputs(url, title, id);
		


		$(".top-nav a").removeClass("active");
		$(this).addClass("active");

	});
});

$(window).bind('popstate', function(){ //triggered on forward and back button events
	console.log('backforward event');
  	var id = window.location.pathname.split('/').filter(function(el){ return !!el; }).pop();  // takes the ID from the end of the URL
  	var url;
  	var title;

  	defaultCreateInputs(url, title, id);
});

function defaultCreateInputs(url, title, id) {
	var url="/page-content/"+id+"/index.html";
	var title = id.charAt(0).toUpperCase() + id.slice(1);
	loadHTML(url, title, id) 
}

function loadHTML(url, title, id) {
	$.ajax({
	    type: "GET",
	    url: url,
	    dataType: "html",
	    success: function (html) {   //html returns the HTML contents of the requested page
	    	if (isHome) {
	        	$('#main').empty();
	    	} else {
	    		$('#main').html(html); 
	    	}
	        window.history.pushState("{page:1}",title,"/"+id);

    	}
	});

	window.onpopstate = function(e){
		if(e.state){
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    	}
	}
}
