// DROPDOWN ARROW ANIMATION
let selects = document.querySelectorAll(".hero__form--item");
selects.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("rotated");
  });
});

//CLOSE HELP TAB
$(".help__chat--close").click(function () {
  $(".help__chat").fadeOut(300);
});

$(document).ready(function () {
  //CHAT OPTION TOGGLE
  $(".chat-option__container").hide();
  $(".chat-option__close").hide();

  $(".help__btn").click(function () {
    $(".help").fadeOut(300);

    $(".chat-option__container").slideToggle(300);
    $(".chat-option__close").fadeIn(400);
  });

  $(".chat-option__close").click(function () {
    $(".help__chat").fadeIn(300);
    $(".chat-option__container").slideToggle(300);
    $(".chat-option__close").fadeOut(300);

    $(".help").fadeIn(300);
  });
});

// //CLOSE HELP TAB
// $(".help__chat--close").click(function () {
//   $(".help__chat").hide();
//   // $(".help__chat").animate({ width: "toggle" });
// });

// $(document).ready(function () {
//   //CHAT OPTION TOGGLE
//   $(".chat-option").hide();

//   $(".help__btn").click(function () {
//     // $(".help").hide();

//     $(".help").animate({ width: "toggle" }, 300);
//     $(".chat-option").slideToggle(300);
//   });

//   $(".chat-option__close").click(function () {
//     // $(".help").slideToggle();
//     $(".help").animate({ width: "toggle" }, 300);
//     $(".help__chat").show(300);
//     $(".chat-option").slideToggle(300);
//   });
// });

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

//MENU NAV TOGGLER

$(".mobile-menu").hide();
$(".toggle-mnu").click(function () {
  $(".overlay").toggleClass("bg-opacity");
  $("body").toggleClass("fixed");
  $(this).toggleClass("on");
  $(".mobile-menu").slideToggle(300);
});

// SUB MENU TOGGLER
$(".mobile-sub-menu").hide();
$(".mobile-menu__dropdown ").click(function () {
  $(".mobile-sub-menu").slideToggle(300);
  $(".mobile-menu__dropdown > a").toggleClass("orange-color");
  $(".mobile-menu__dropdown").toggleClass("orange-toggler");
});

// $(document).scroll(function () {
//   var y = $(this).scrollTop();

//   if (y == $(".top-row").offset().top + 10) {
//     $(".count").each(function () {
//       $(this)
//         .prop("Counter", 0)
//         .animate(
//           {
//             Counter: $(this).text(),
//           },
//           {
//             duration: 1000,
//             easing: "swing",
//             step: function (now) {
//               if (Number.isInteger(now)) {
//                 $(this).text(now);
//               } else {
//                 $(this).text(now.toFixed(2));
//               }
//             },
//           }
//         );
//     });
//   }
// });

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".support-top")) && !viewed) {
    viewed = true;
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}
