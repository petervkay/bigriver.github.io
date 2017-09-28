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
  if (location.origin + '/about/' == location.href) {
    function removeActiveClass() {
      $(links).removeClass('active');
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {

      function requestContent(url) {
        $("#main").load(url);
      }

      function addActiveClass(elem) {
        removeActiveClass();
        console.log(elem);
        var element = document.querySelector("#" + elem);
        element.classList.add('active');
      }
      addActiveClass("services");
      history.pushState("services", null, "/services/");
      requestContent("/page-content/services/index.html");
      document.title = "Big River Web Design | services";
      removeClassFixed();
    } else if ($(window).scrollTop() == 0) {
      removeActiveClass();
      $("#main").empty();
      history.pushState("home", null, "/");
      document.title = "Big River Web Design";
      addClassFixed();
    }
  }
})

</script>
