let orderPriceTab = document.querySelectorAll(".order-form__heading--tab");
let nextBtn = document.querySelectorAll(".next-step-btn");

// tabs toggler
orderPriceTab.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.id) {
      // make form not active
      let activeFormId = document.querySelector("#active-tab").classList[1];

      $("#" + activeFormId).addClass("not-active-form");

      document.querySelector("#active-tab").removeAttribute("id");
      let target = e.target;
      console.log(target);
      if (target.parentElement.classList.contains("order-form__heading")) {
        target.setAttribute("id", "active-tab");
        let newActiveFormId = document.querySelector("#active-tab")
          .classList[1];
        $("#" + newActiveFormId).removeClass("not-active-form");
      } else {
        target.parentElement.setAttribute("id", "active-tab");
        let newActiveFormId = document.querySelector("#active-tab")
          .classList[1];
        $("#" + newActiveFormId).removeClass("not-active-form");
      }
    }
  });
});

nextBtn.forEach((item) => {
  item.addEventListener("click", () => {
    // MAKE TAB NOT ACTIVE
    let activeTabClass = document.querySelector("#active-tab").classList[2];
    $("." + activeTabClass).removeAttr("id");

    // SET ACTIVE TAB
    let activeFormId = document.querySelector("." + activeTabClass)
      .classList[1];
    $("#" + activeFormId).addClass("not-active-form");
    $("." + activeTabClass + 1).attr("id", "active-tab");
    activeTabClass = document.querySelector("#active-tab").classList[2];
    activeFormId = document.querySelector("." + activeTabClass).classList[1];
    $("#" + activeFormId).removeClass("not-active-form");
  });
});

//CHANGE DROPDOWN ITEM BACKGROUND ON HOVER
let menuItem = document.querySelectorAll(".form__select-input--menu > p");

menuItem.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.setAttribute("style", "background: #FBFBFD;");
    e.target.setAttribute("class", "active-menu-item");
  });
  item.addEventListener("mouseout", (e) => {
    e.target.setAttribute("style", "background: #FFF;");
    e.target.removeAttribute("class");
  });
});

//HIDE DROPDOWN
$(".form__select-input--menu").hide();

let selectItems = document.querySelectorAll(".form__select");

selectItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    //REMOVE INPUT PLACEHOLDER
    if (e.target.type === "date") {
      $("input[type=date]").removeClass("placeholderclass");
      $("input[type=date]").addClass("onfocus");
    }
    if (e.target.id && !$("#" + e.target.id + " > img").attr("style")) {
      // ROTATE ARROW
      $("#" + e.target.id + " > img").css("transform", "rotate(180deg)");
    } else if (e.target.id && $("#" + e.target.id + " > img")) {
      $("#" + e.target.id + " > img").removeAttr("style");
    } else {
      // PUT DROPDOWN CHOSE TEXT TO INPUT
      let chosenText = e.target.textContent;

      if (this.id !== "deadline-select") {
        $("#" + this.id + "-order").text(chosenText);
      } else {
        $("input[type=date]").focusout(function () {
          $("#deadline-select-order").text($("input[type=date]")[0].value);
        });
      }

      if (this.id) {
        $("#" + this.id + " > div:nth-child(2) > p").text(chosenText);
        $("#" + this.id + " > div:nth-child(2) > p").css("color", "#020202");
        $("#" + this.id + "-item > img").removeAttr("style");
        $("#" + this.id + "-item-menu").slideToggle(300);
      }
    }

    // SLIDE DROPDOWN
    $("#" + e.target.id + "-menu").slideToggle(300);
  });
});

// SELECT FILE
$("#custom-file").change(function () {
  $("#custom-input-file").text(this.files[0].name);
  let files = this.files;
  console.log(files[0].name);

  $(".custom-input-file-img > img").attr("src", "../img/reset-input.svg");
  $(".custom-input-file-img").css("top", "59%");
  $(".custom-input-file-img").click(function () {
    $("#custom-file")[0].value = "";
    // console.log($("#custom-file"));

    $(".custom-input-file-img > img").attr("src", "../img/ic_attach.svg");
    $(".custom-input-file-img").css("top", "50%");
    document.querySelector("#custom-input-file").textContent = "Your file";
    console.log($("#custom-input-file"));
  });
});

// SHOW PASSWORD
$(".show-pass").click(function () {
  let passwordInput = document.querySelector(".password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

$(".login").hide();
// LOGIN OR SIGN UP FORM
$("#sign-up").click(function () {
  if ($(this).is(":checked")) {
    $(".login").hide();
    $(".sign-up").show();
  }
});
$("#login").click(function () {
  if ($(this).is(":checked")) {
    $(".sign-up").hide();
    $(".login").show();
  }
});

$(".account-info").hide();
$("#login-btn-item").click(function () {
  $(".login").hide();
  $(".customer-type").hide();
  $(".continuing-options").hide();
  $(".account-info").show();
});

$(".promocode-container").hide();

$("#promocode").click(function () {
  $("#promocode").hide();
  $(".promocode-container").show();
});
