// DROPDOWN ARROW ANIMATION
let selects = document.querySelectorAll(".hero__form--item");
selects.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("rotated");
  });
});
//CLOSE HELP TAB
$(".help__chat--close").click(function () {
  $(".help__chat").hide();
});

$(document).ready(function () {
  //CHAT OPTION TOGGLE
  $(".chat-option").hide();

  $(".help__btn").click(function () {
    $(".help").hide();
    $(".chat-option").show();
  });

  $(".chat-option__close").click(function () {
    $(".help").show();
    $(".help__chat").show();
    $(".chat-option").hide();
  });
});

// SERVICEs MENU
$(".services-nav").hide();

$(".header__navbar--dropdown").hover(
  function () {
    $("#services").css("color", "#ef8880");
    $(".services-nav").show();
  },
  function () {
    $("#services").css("color", "#020202");
    $(".services-nav").hide();
  }
);
