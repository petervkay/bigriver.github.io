---
title: About
layout: page
group: top-nav
permalink: /about/
navigation_weight: 1
---

<div id="main-container">
  {% for blurb in site.data.about %}
    {% include text_tile.html content=blurb %}
  {% endfor %}
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > ($(document).height())/2) {
     requestContent({{site.baseurl}}/services)
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#main-container').fadeOut();
       setTimeout(function(){window.location.href = "{{site.baseurl}}/services"},400);
     }
   }
});
</script>
