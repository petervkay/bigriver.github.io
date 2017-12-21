---
---

$(document).ready(function() {
  links = $(".top-nav a, a.home");

  function removeActiveClass() {
    $(links).removeClass('active');
  }

  function addActiveClass(elem) {
    removeActiveClass();
    console.log(elem);
    console.log($('#main-container').height())
    var element = document.querySelector("#" + elem);
    element.classList.add('active');
  }

  function requestContent(url) {
    $("#main").load(url);
  }

  $(links).click(function(e) {

    e.preventDefault();

    isHome = $(this).hasClass('home');
    console.log('ishome: ' + isHome);

    if (isHome == false) {
      var data = e.target.getAttribute('data-name');
      var url = "{{site.baseurl}}/page-content/" + data + "/index.html";
      addActiveClass(data);
      history.pushState(data, null, "{{site.baseurl}}/" + data + '/');
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

  window.addEventListener('popstate', function(e) {

    var data = e.state;

    if (data != "home") {
      var url = "{{site.baseurl}}/page-content/" + data + "/index.html";
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

  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({duration: $(window).height(), offset: 0}).on("update", function(e) {
    console.log(e.target.controller().info("scrollDirection"));
  })
  //				.on("enter leave", )
    .addTo(controller)
  //		.addIndicators()

  var scene1 = new ScrollMagic.Scene({
    offset: 0, duration: 575, // pin element for the window height - 1
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  }).setPin("#wrapper-masthead"). // the element we want to pin
  addTo(controller);

  var pageArray = [
    "/",
    "/about/",
    "/services/",
    "/portfolio/",
    "/members/",
    "/contact/"
  ];

  function downScroll(nextPage) {
    $('#main-container').hide();
    addActiveClass(nextPage);
    history.pushState(nextPage, null, "{{site.baseurl}}/" + nextPage + "/");
    requestContent("{{site.baseurl}}/page-content/" + nextPage + "/index.html");
    document.title = "Big River Web Design | " + nextPage;
    noHelp();
		disableScroll();
		setTimeout(function() {
			enableScroll();
		}, 700);
  }

  function upScroll(previousPage) {
    $('#main-container').hide();
    if (previousPage === 'home') {
      removeActiveClass();
      $("#main").empty();
      history.pushState("home", null, "{{site.baseurl}}/");
      document.title = "Big River Web Design";
      hideHelp();
    } else {
      addActiveClass(previousPage);
      history.pushState(previousPage, null, "{{site.baseurl}}/" + previousPage + "/");
      requestContent("{{site.baseurl}}/page-content/" + previousPage + "/index.html");
      document.title = "Big River Web Design | " + previousPage;
      noHelp();
			disableScroll();
			setTimeout(function() {
				enableScroll();
			}, 700);
    }
  }

/*  $(window).scroll(function() {
    if (location.origin + '{{site.baseurl}}/' == location.href) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        downScroll('about');
      }
    } else if (location.origin + '{{site.baseurl}}/about/' == location.href) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        downScroll('services');
      } else if ($(window).scrollTop() == 0) {
        upScroll('home');
      }
    } else if (location.origin + '{{site.baseurl}}/services/' == location.href) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        downScroll('portfolio');
      } else if ($(window).scrollTop() == 0) {
        upScroll('about');
      }
    } else if (location.origin + '{{site.baseurl}}/portfolio/' == location.href) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        downScroll('members');
      } else if ($(window).scrollTop() == 0) {
        upScroll('services');
      }
    } else if (location.origin + '{{site.baseurl}}/members/' == location.href) {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        downScroll('contact');
      } else if ($(window).scrollTop() == 0) {
        upScroll('portfolio');
      }
    } else if (location.origin + '{{site.baseurl}}/contact/' == location.href) {
      if ($(window).scrollTop() == 0) {
        upScroll('members');
      }
    }
  })*/

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

});
