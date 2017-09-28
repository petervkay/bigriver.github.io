---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---
<div id="main-container">
	<div id='coverTarget' class='center'>
		<div id='tags' class='clickable'>
			<div id='platTags' class='clickable'>
				{% for tags in site.data.platformtags %}
				{% include tags.html content=tags %}
				{% endfor %}
			</div>
			<div id='bizTags'>
				{% for tags in site.data.biztags %}
				{% include tags.html content=tags %}
				{% endfor %}
			</div>
		</div>
		<div class='flex-container 3col flex' >
			{% for website in site.data.websites %}
			{% include website_tile.html website=website %}
			{% endfor %}
		</div>
		<div id='websiteViewer' style="display: none;" class="box clickable"></div>
	</div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});

$(window).scroll(function() {
  if (location.origin + '/portfolio/' == location.href) {
    function removeActiveClass() {
      $(links).removeClass('active');
    }
    function requestContent(url) {
      $("#main").load(url);
    }
    function addActiveClass(elem) {
      removeActiveClass();
      console.log(elem);
      var element = document.querySelector("#" + elem);
      element.classList.add('active');
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      addActiveClass("members");
      history.pushState("members", null, "/members/");
      requestContent("/page-content/members/index.html");
      document.title = "Big River Web Design | members";
      removeClassFixed();
    } else if ($(window).scrollTop() == 0) {
      addActiveClass("services");
      history.pushState("services", null, "/services/");
      requestContent("/page-content/services/index.html");
      document.title = "Big River Web Design | services";
			console.log($('#main-container').height()+100);
			$('html,body').scrollTop($('#main-container').height()+100);
			console.log($(window).scrollTop());
    }
  }
})

</script>
<script src='{{site.baseurl}}/js/portfolio.js'></script>
