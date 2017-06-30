---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---
<div id="main-container">
	<div id='coverTarget' class='center'>
		<div id='tags'>
			<div id='platTags'>
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

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
if (getParameterByName('site')) {
	eventFire(document.getElementById(getParameterByName('site')), 'click');
}
</script>
<script src='{{site.baseurl}}/js/portfolio.js'></script>
