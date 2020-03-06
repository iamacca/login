var diventatoheader = false;

$("#login").click(function() {
  if (diventatoheader == true) {
    $(".box-logo").removeClass("box-logo-header");
    $(".netflix-logo").removeClass("netflix-logo-header");
    $(".background-login").removeClass("background-login-full");
    $(".login-form").removeClass("login-form-full");
    diventatoheader = false;
  } else {
    $(".box-logo").addClass("box-logo-header");
    $(".netflix-logo").addClass("netflix-logo-header");
    $(".background-login").addClass("background-login-full");
    $(".login-form").addClass("login-form-full");
    diventatoheader = true;
  }
});