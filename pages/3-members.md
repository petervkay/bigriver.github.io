---
title: Members
layout: page
group: top-nav
permalink: /members/
---

<div id="main-container">
  <div class="mosaic">
    {% for member in site.data.members %}
      {% include img_text_tile.html content=member %}
    {% endfor %}
  </div>

  <div class="img_text_tile bottomText">
    <p><strong>The best way to get in touch with us is at <a class="email" href= "mailto:bigriverwebdesign@gmail.com">bigriverwebdesign@gmail.com</a>.</strong> Just send us a message portfolio the kind of project that you're looking to get done, with as much detail as you have available. We can do some initial consulting at no charge and then come up with a quote for how much we should charge to get your product done. Then, we can move forward and get your site done quickly.</p>
  <div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});

$(window).scroll(function() {
  if (location.origin + '{{site.baseurl}}/members/' == location.href) {
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
      addActiveClass("contact");
      history.pushState("contact", null, "{{site.baseurl}}/contact/");
      requestContent("{{site.baseurl}}/page-content/contact/index.html");
      document.title = "Big River Web Design | contact";
      removeClassFixed();
    } else if ($(window).scrollTop() == 0) {
      addActiveClass("portfolio");
      history.pushState("portfolio", null, "{{site.baseurl}}/portfolio/");
      requestContent("{{site.baseurl}}/page-content/portfolio/index.html");
      document.title = "Big River Web Design | portfolio";
      $('html,body').scrollTop(50);
      console.log($(window).scrollTop());
    }
  }
})

</script>
