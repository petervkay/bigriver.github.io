---
---

$(document).ready(function() {
  links = $(".top-nav a, a.home");

  function removeActiveClass() {
    $(links).removeClass('active');
  }

  function addActiveClass(elem) {
    removeActiveClass();
    console.log(elem);
    console.log($('#main-container').height())
    var element = document.querySelector("#" + elem);
    element.classList.add('active');
  }

  function requestContent(url) {
    $("#main").load(url);
  }



  //links navigation

  $(links).click(function(e) {

    e.preventDefault();

    isHome = $(this).hasClass('home');
    console.log('ishome: ' + isHome);

    if (isHome == false) {
      var data = e.target.getAttribute('data-name');
      var url = "{{site.baseurl}}/page-content/" + data + "/index.html";
      addActiveClass(data);
      history.pushState(data, null, "{{site.baseurl}}/" + data + '/');
      // updateText(data);
      requestContent(url);
      document.title = "Big River Web Design | " + data;
    } else {
      removeActiveClass();
      $("#main").empty();
      history.pushState("home", null, "{{site.baseurl}}/")
      document.title = "Big River Web Design"
    }

    e.stopPropagation();
  });

  //history event navigation

  window.addEventListener('popstate', function(e) {

    var data = e.state;

    if (data != "home") {
      var url = "{{site.baseurl}}/page-content/" + data + "/index.html";
      addActiveClass(data);
      requestContent(url);
      console.log(url);
      document.title = "Big River Web Design | " + data;
    } else {
      removeActiveClass();
      $("#main").empty();
      document.title = "Big River Web Design";
    }
  });

  

  

});
