---
title: Portfolio
layout: page
permalink: /portfolio/
group: top-nav
---

<div class='flex-container 3col' >
	{% for website in site.data.websites %} 
	{% include website_tile.html website=website %}
	{% endfor %}
</div>

<!--<script src='{{site.baseurl}}/js/portfolio.js'></script>-->


