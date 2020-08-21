// fix form on scroll
let formTop = 0;
let blockBottom = 0;
$(document).ready(function () {
  formTop = $(".article-form").offset().top;

  blockBottom = $(".scroll-target").offset().top;
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if ($(document).width() > 1000) {
    if (blockBottom - 50 > y && y > formTop - 100) {
      $(".article-form").css({ position: "sticky", top: "100px" });
    } else {
      $(".article-form").css({ position: "static" });
    }
  }
});
