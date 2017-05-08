---
title: Services
layout: page
permalink: /services/
group: top-nav
---

<div class="pond">
  {% for service in site.data.services %}
    {% include service_box.html content=service %}
  {% endfor %}
</div>

<div class="logos">
  <a href="http://www.wordpress.com"><img class="logo" src="{{ site.baseurl }}/images/wordpress-logo.png"
       alt="wordpress" /></a>
  <a href="https://www.djangoproject.com/"><img class="logo" src="{{ site.baseurl }}/images/django-logo.svg"
       alt="django" /></a>
  <a href="http://www.nationbuilder.com"><img class="logo" src="{{ site.baseurl }}/images/nationbuilder-logo.jpg"
       alt="nationbuilder" /></a>
  <a href="https://jekyllrb.com/"><img class="logo" src="{{ site.baseurl }}/images/jekyll-logo.png"
       alt="jekyll" /></a>
</div>
