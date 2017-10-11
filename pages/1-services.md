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
    <a class="clickable" href="{{ site.baseurl }}/portfolio/?platform=WORDPRESS"><img class="clickable logo" src="{{ site.baseurl }}/images/wordpress-logo.png"
         alt="wordpress" /></a>
    <a class="clickable" href="{{ site.baseurl }}/portfolio/?platform=APPLICATIONS"><img class="clickable logo" src="{{ site.baseurl }}/images/django-logo.svg"
         alt="django" /></a>
    <a class="clickable" href="{{ site.baseurl }}/portfolio/?platform=NATIONBUILDER"><img class="clickable logo" src="{{ site.baseurl }}/images/nationbuilder-logo.jpg"
         alt="nationbuilder" /></a>
    <a class="clickable" href="{{ site.baseurl }}/portfolio/?platform=JEKYLL"><img class="clickable logo" src="{{ site.baseurl }}/images/jekyll-logo.png"
         alt="jekyll" /></a>
  </div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});

$(window).scroll(function() {
  if (location.origin + '/services/' == location.href) {
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
      addActiveClass("portfolio");
      history.pushState("portfolio", null, "/portfolio/");
      requestContent("/page-content/portfolio/index.html");
      document.title = "Big River Web Design | portfolio";
      removeClassFixed();
    } else if ($(window).scrollTop() == 0) {
      addActiveClass("about");
      history.pushState("about", null, "/about/");
      requestContent("/page-content/about/index.html");
      document.title = "Big River Web Design | about";
      $('html,body').scrollTop(50);
      console.log($(window).scrollTop());
    }
  }
})

</script>
