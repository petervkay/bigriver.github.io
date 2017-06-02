---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---
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

<script src='{{site.baseurl}}/js/portfolio.js'></script>
