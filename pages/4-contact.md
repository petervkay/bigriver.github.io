---
title: Contact
layout: page
group: top-nav
permalink: /contact/
---

<div id="main-container">
  <div class="form_tile contact clickable">
      <form id="bigriverform" method="POST"
            action="https://www.formingo.co/submit/bigriverwebdesign@gmail.com">
          <input type="text" name="full_name" placeholder="name">
          <input type="email" name="__replyto" placeholder="email">
          <input type="text" name="phone_number" placeholder="phone"><br>
          <textarea placeholder="enter your question or a description of your project here:" rows="4" cols="63" name="comment" form="bigriverform"></textarea><br>
          <input type="hidden" name="__redirect" value="https://petervkay.github.io/bigriver.github.io/">
          <input type="submit" value="Send">
      </form>
  </div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});
</script>
