// fix form on scroll
let formTop = 0;
let blockBottom = 0;
$(document).ready(function () {
  formTop = $(".faq-form").offset().top;

  blockBottom = $(".scroll-target").offset().top;
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if ($(document).width() > 1000) {
    if (blockBottom - 450 > y && y > formTop - 100) {
      $(".faq-form").css({ position: "sticky", top: "100px" });
    } else {
      $(".faq-form").css({ position: "static" });
    }
  }
});

// search on page
// console.log(document.querySelector(".hero__left--faqs").children); //length is working
$("#faq-search").change(function () {
  console.log($("#faq-search"));
  // $("faq-search-label").innerText = $("#faq-search").value;
  let filterValue = $("#faq-search")[0].value.toUpperCase();

  let childrenArrayLength = document.querySelector(".hero__left--faqs").children
    .length;
  let childrenItem = document.querySelector(".hero__left--faqs").children;
  for (let i = 0; i < childrenArrayLength; i++) {
    if (childrenItem[i].textContent.toUpperCase().indexOf(filterValue) > -1) {
      childrenItem[i].style.display = "";
    } else {
      childrenItem[i].style.display = "none";
    }
  }
});
