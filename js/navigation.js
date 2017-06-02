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
			var url="/page-content/"+id+"/index.html";	
			var title = id.charAt(0).toUpperCase() + id.slice(1); 
		}

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
		        window.history.pushState("test",title,"/"+id);
		        document.title=title;

	    	}
		});

		window.onpopstate = function(e){
    		if(e.state){
	        document.getElementById("content").innerHTML = e.state.html;
	        document.title = e.state.pageTitle;
	    }
};

		$(".top-nav a").removeClass("active");
		$(this).addClass("active");

	});
});


