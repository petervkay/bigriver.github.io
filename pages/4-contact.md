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
          <input id="formSubmit" type="button" value="Send" onclick="hideButton()">
      </form>
  </div>
</div>

<script>
$(document).ready(function() {
    if ($('#photosphere-background').children().length !== 0) {
      $("#main-container").fadeIn();
    }
});
function hideButton() {
  $('#formSubmit').hide();
  $("#bigriverform").append("<p style='padding-bottom: 10px;'>Thank you, your message has been sent!</p>");
}
</script>
