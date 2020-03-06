var diventatoheader = false;

$("#login").click(function() {
  if (diventatoheader == true) {
    $(".box-logo").removeClass("box-logo-header");
    $(".netflix-logo").removeClass("netflix-logo-header");
    diventatoheader = false;
  } else {
    $(".box-logo").addClass("box-logo-header");
    $(".netflix-logo").addClass("netflix-logo-header");
    diventatoheader = true;
  }
});