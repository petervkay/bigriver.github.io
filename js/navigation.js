---
---

$(document).ready(function(){
	links = $(".top-nav a, a.home");

	function removeActiveClass(){
    	$(links).removeClass('active');
  	}

	function addActiveClass(elem){
	    removeActiveClass();
	    console.log(elem);
			console.log($('#main-container').height())
	    var element = document.querySelector("#" + elem);
	    element.classList.add('active');
  	}

	function requestContent(url){
		$("#main").load(url);
	}


	$(links).click(function(e) {

		  	e.preventDefault();

			isHome = $(this).hasClass('home');
			console.log('ishome: ' + isHome);

			if (isHome==false) {
		    	var data = e.target.getAttribute('data-name');
		   		var url = "{{site.baseurl}}/page-content/"+data+"/index.html";
			    addActiveClass(data);
			    history.pushState(data, null, "{{site.baseurl}}/"+data);
			   // updateText(data);
			    requestContent(url);
			    document.title = "Big River Web Design | " + data;
			} else {
				removeActiveClass();
				$("#main").empty();
				history.pushState("home", null, "{{site.baseurl}}/")
				document.title = "Big River Web Design"
			}

	    	e.stopPropagation();
	});

	window.addEventListener('popstate', function(e){

    	var data = e.state;

    	if (data!="home") {
	    	var url = "{{site.baseurl}}/page-content/"+data+"/index.html";
	    	addActiveClass(data);
	    	requestContent(url);
	      	document.title = "Big River Web Design | " + data;
	    } else {
	    	removeActiveClass();
			$("#main").empty();
			document.title = "Big River Web Design";
	    }
	});

	// pageScroll code

	$(window).scroll(function() {
		console.log($(window).scrollTop());
		if (location.origin + '{{site.baseurl}}/' == location.href) {
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				addActiveClass("about");
				history.pushState("about", null, "{{site.baseurl}}/about/");
				requestContent("{{site.baseurl}}/page-content/about/index.html");
				document.title = "Big River Web Design | about";
				removeClassFixed();
			}
		} else if (location.origin + '{{site.baseurl}}/about/' == location.href) {
	    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	      addActiveClass("services");
	      history.pushState("services", null, "{{site.baseurl}}/services/");
	      requestContent("{{site.baseurl}}/page-content/services/index.html");
	      document.title = "Big River Web Design | services";
	      removeClassFixed();
	    } else if ($(window).scrollTop() == 0) {
	      removeActiveClass();
	      $("#main").empty();
	      history.pushState("home", null, "{{site.baseurl}}/");
	      document.title = "Big River Web Design";
	      addClassFixed();
	    }
	  } else if (location.origin + '{{site.baseurl}}/services/' == location.href) {
	    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	      addActiveClass("portfolio");
	      history.pushState("portfolio", null, "{{site.baseurl}}/portfolio/");
	      requestContent("{{site.baseurl}}/page-content/portfolio/index.html");
	      document.title = "Big River Web Design | portfolio";
	      removeClassFixed();
	    } else if ($(window).scrollTop() == 0) {
	      addActiveClass("about");
	      history.pushState("about", null, "{{site.baseurl}}/about/");
	      requestContent("{{site.baseurl}}/page-content/about/index.html");
	      document.title = "Big River Web Design | about";
	      $('html,body').scrollTop(50);
	      console.log($(window).scrollTop());
	    }
	  } else if (location.origin + '{{site.baseurl}}/portfolio/' == location.href) {
	    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	      addActiveClass("members");
	      history.pushState("members", null, "{{site.baseurl}}/members/");
	      requestContent("{{site.baseurl}}/page-content/members/index.html");
	      document.title = "Big River Web Design | members";
	      removeClassFixed();
	    } else if ($(window).scrollTop() == 0) {
	      addActiveClass("services");
	      history.pushState("services", null, "{{site.baseurl}}/services/");
	      requestContent("{{site.baseurl}}/page-content/services/index.html");
	      document.title = "Big River Web Design | services";
				console.log($('#main-container').height()+100);
				$('html,body').scrollTop(50);
				console.log($(window).scrollTop());
	    }
	  } else if (location.origin + '{{site.baseurl}}/members/' == location.href) {
	    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	      addActiveClass("contact");
	      history.pushState("contact", null, "{{site.baseurl}}/contact/");
	      requestContent("{{site.baseurl}}/page-content/contact/index.html");
	      document.title = "Big River Web Design | contact";
	      removeClassFixed();
	    } else if ($(window).scrollTop() == 0) {
	      addActiveClass("portfolio");
	      history.pushState("portfolio", null, "{{site.baseurl}}/portfolio/");
	      requestContent("{{site.baseurl}}/page-content/portfolio/index.html");
	      document.title = "Big River Web Design | portfolio";
	      $('html,body').scrollTop(50);
	      console.log($(window).scrollTop());
	    }
	  } else if (location.origin + '{{site.baseurl}}/contact/' == location.href) {
	    if ($(window).scrollTop() == 0) {
	      addActiveClass("members");
	      history.pushState("members", null, "{{site.baseurl}}/members/");
	      requestContent("/page-content/members/index.html");
	      document.title = "Big River Web Design | members";
	      $('html,body').scrollTop(50);
	      console.log($(window).scrollTop());
	    }
	  }
	})
});
