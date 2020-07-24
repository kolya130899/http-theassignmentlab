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
    $(".form__select-input.password + img").attr(
      "src",
      "../img/ic_hide_pass.svg"
    );
    $(".login-password").attr("src", "../img/ic_hide_pass.svg");
  } else {
    passwordInput.type = "password";
    $(".form__select-input.password + img").attr(
      "src",
      "../img/ic_show_pass.svg"
    );
    $(".login-password").attr("src", "../img/ic_show_pass.svg");
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

$("#deadline-select > input").change(function () {
  console.log($("#deadline-select > input"));
});

$("input[type='date']").click(function () {
  $(this).removeClass("placeholderclass");
  $(this).addClass("onfocus");
});
