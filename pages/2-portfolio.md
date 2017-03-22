---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---
<div class='center'>
	<div class='flex-container 3col flex' >
		{% for website in site.data.websites %}
		{% include website_tile.html website=website %}
		{% endfor %}
	</div>
</div>

<!--<script src='{{site.baseurl}}/js/portfolio.js'></script>-->
