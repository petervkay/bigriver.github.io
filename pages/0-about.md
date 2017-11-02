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
    if ($('#photosphere-background').children().length !== 0) {
      $("#main-container").fadeIn();
    }
});
</script>
