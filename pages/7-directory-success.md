---
title: Directory Success
layout: page
permalink: /directory-success/
---
<script>
    function requestAuth() {
        event.preventDefault();
        slug = $("#slug").val();

        function preauthenticate(slug, callback) {
                var data= {
                    'slug' : slug
                }

                $.ajax({
                    type: "GET",
                    url: "http://www.nbdirectory.site/preauthenticate",
                    data: data,
                    crossDomain: true,
                });

                console.log(slug);

                /*callback(slug);*/
            }

        function authorization_redirect(slug) {
               url = "https://" + slug + ".nationbuilder.com/oauth/authorize?response_type=code&client_id=725cf9d4f9380b5d8946b238fb8d2f1f10c151b86dee199913ade8521679e2f6&redirect_uri=https%3A%2F%2Fwww.nbdirectory.site%2Fauthenticate";
               window.location.href = url;
        }

       preauthenticate(slug, authorization_redirect);
    }
</script>

<div id="main-container">
  <div class="directoryPageBox clickable">
    <h6>Transaction Successful</h6>
    <p>Thank you! Your transaction was successful. To get the application set up, please send the following to <a href="info@bigriverwebdesign.com">info@bigriverwebdesign.com</a>:</p>

    <ul>
      <li>The size of your database</li>
      <li>Which searchable fields you would like included. Available fields are first name, last name, city, state and sex.&nbsp;All custom fields are supported and must already be created within your Nationbuilder settings.  Please let us know which of your custom fields you would like included in the directory.</li>
      <li>Your unique NationBuilder slug (if your site’s NationBuilder URL is mywebsite.nationbuilder.com, the slug is “my website”)</li>
      <li>Whether you would like photos displayed on your directory </li>
      <li>Whether you would like your directory to link to public profiles </li>
      <li>Whether you would like your whole database searched or just a subsection of it</li>

    </ul>

    <p> We will respond to your email with a block of code that you will include in the page template where you want the directory to be displayed.  In order to allow our authorize our application to access your database, please enter your NationBuilder slug in the box below and click "Authorize."</p>

    <form id="auth-form" class="clickable" onsubmit="requestAuth()" label='Authorize'>
      <input id='slug' type='text' name='nation_slug' label='Nation Slug'>
      <input id='submit' type='submit' value='Authorize'>
    </form>

    <p> Custom implementations are available upon request. Please contact us at info@bigriverwebdesign.com with any questions. </p>

  </div>
</div>

<script>
$(document).ready(function() {
    $('#main-container').fadeIn();
});
</script>
