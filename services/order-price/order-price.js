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

let activeTabClass = document.getElementById("active-tab").classList[2];
let activeFormId = document.querySelector("." + activeTabClass).classList[1];
let activeForm = document.getElementById(activeFormId);

let dataArray = {};

activeForm.onsubmit = (e) => {
  e.preventDefault();

  activeTabClass = document.getElementById("active-tab").classList[2];
  activeFormId = document.querySelector("." + activeTabClass).classList[1];
  activeForm = document.getElementById(activeFormId);

  let formData = new FormData(activeForm);

  for (let key of formData.keys()) {
    dataArray = {
      ...dataArray,
      [key]: formData.get(key),
    };
  }

  let emptyFields = [];
  for (let key in dataArray) {
    if (dataArray[key] === "") {
      emptyFields.push(key);
    }
  }

  if (emptyFields.length === 0) {
    // MAKE TAB NOT ACTIVE
    $("." + activeTabClass).removeAttr("id");
    // SET ACTIVE TAB

    $("#" + activeFormId).addClass("not-active-form");
    $("." + activeTabClass + 1).attr("id", "active-tab");
    activeTabClass = document.querySelector("#active-tab").classList[2];
    activeFormId = document.querySelector("." + activeTabClass).classList[1];
    $("#" + activeFormId).removeClass("not-active-form");
  }

  console.log(dataArray);
  console.log(activeForm);
};
// nextBtn.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     let activeTabClass = document.getElementById("active-tab").classList[2];

//     let activeFormId = document.querySelector("." + activeTabClass)
//       .classList[1];

//     let result = data.filter((item) => item.value === "");
//     console.log("result", data);
//     console.log(result);

//     if (result.length === 0) {
//       // MAKE TAB NOT ACTIVE
//       $("." + activeTabClass).removeAttr("id");
//       // SET ACTIVE TAB

//       $("#" + activeFormId).addClass("not-active-form");
//       $("." + activeTabClass + 1).attr("id", "active-tab");
//       activeTabClass = document.querySelector("#active-tab").classList[2];
//       activeFormId = document.querySelector("." + activeTabClass).classList[1];
//       $("#" + activeFormId).removeClass("not-active-form");
//     }
//   });
// });

// SELECT FILE
$("#custom-file").change(function () {
  $("#custom-input-file").text(this.files[0].name);
  let files = this.files;
  console.log(files[0]);

  $(".custom-input-file-img > img").attr("src", "../img/reset-input.svg");
  $(".custom-input-file-img").css("top", "59%");
  $(".custom-input-file-img").click(function () {
    $("#custom-file")[0].value = "";

    $(".custom-input-file-img > img").attr("src", "../img/ic_attach.svg");
    $(".custom-input-file-img").css("top", "50%");
    document.querySelector("#custom-input-file").textContent = "Your file";
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
