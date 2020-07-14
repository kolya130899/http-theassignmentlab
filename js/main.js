// SLICK CAROUSEL
$(document).ready(function () {
  $(".testimonials__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 816,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// DROPDOWN ARROW ANIMATION
var selects = document.getElementsByClassName(".hero__form--item");
var form = document.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("rotated");
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
