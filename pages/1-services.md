---
title: Services
layout: page
permalink: /services/
group: top-nav
---

<div id="main-container">
  <div class="pond">
    {% for service in site.data.services %}
      {% include service_box.html content=service %}
    {% endfor %}
  </div>

  <div class="logos clickable">
    <a class="clickable" href="http://www.wordpress.com"><img class="clickable logo" src="{{ site.baseurl }}/images/wordpress-logo.png"
         alt="wordpress" /></a>
    <a class="clickable" href="https://www.djangoproject.com/"><img class="clickable logo" src="{{ site.baseurl }}/images/django-logo.svg"
         alt="django" /></a>
    <a class="clickable" href="http://www.nationbuilder.com"><img class="clickable logo" src="{{ site.baseurl }}/images/nationbuilder-logo.jpg"
         alt="nationbuilder" /></a>
    <a class="clickable" href="https://jekyllrb.com/"><img class="clickable logo" src="{{ site.baseurl }}/images/jekyll-logo.png"
         alt="jekyll" /></a>
  </div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});
</script>
