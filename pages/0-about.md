---
title: About
layout: page
group: top-nav
permalink: /about/
---

{% for blurb in site.data.about %}
  {% include text_tile.html content=blurb %}
{% endfor %}
