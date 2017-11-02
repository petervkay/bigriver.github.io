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
    <p><strong>The best way to get in touch with us is at <a class="email" href= "mailto:bigriverwebdesign@gmail.com">bigriverwebdesign@gmail.com</a>.</strong> Just send us a message about the kind of project that you're looking to get done, with as much detail as you have available. We can do some initial consulting at no charge and then come up with a quote for how much we should charge to get your product done. Then, we can move forward and get your site done quickly.</p>
  <div>
</div>

<script>
$(document).ready(function() {
    if ($('#photosphere-background').children().length !== 0) {
      $("#main-container").fadeIn();
    }
});
</script>
