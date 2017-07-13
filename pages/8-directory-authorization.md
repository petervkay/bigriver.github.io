---
title: Directory Authorization
layout: page
permalink: /directory-authorization/
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
                    url: "https://nbdirectory.site/preauthenicate",
                    data: data,
                    crossDomain: true,
                });

                console.log('slug');

                callback(slug);
            }

        function authorization_redirect(slug) {
               url = "https://" + slug + ".nationbuilder.com/oauth/authorize?response_type=code&client_id=725cf9d4f9380b5d8946b238fb8d2f1f10c151b86dee199913ade8521679e2f6&redirect_uri=https%3A%2F%2Fwww.nbdirectory.site%2Fauthenticate";
               window.location.href = url;
        }

       preauthenticate(slug, authorization_redirect);
    }
</script>

<form id="auth-form" class="clickable" onsubmit="requestAuth()">
    <input id='slug' type='text' name='nation_slug' label='Nation Slug'>
    <input id='submit' type='submit' value='Submit'>
</form>