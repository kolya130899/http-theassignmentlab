let orderPriceTab = document.querySelectorAll(".order-form__heading--tab");
let nextBtn = document.querySelectorAll(".next-step-btn");

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

// orderPriceTab.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     if (!item.hasAttribute("id")) {
//       document.querySelector("#active-tab").removeAttribute("id");
//       $(".active-form").removeClass("active-form").addClass("not-active-form");
//       item.setAttribute("id", "active-tab");
//       console.log(item.classList[1]);
//       $("#" + item.classList[1]).removeClass("not-active-form");
//       $("#" + item.classList[1]).addClass("active-form");
//     }
//   });
// });

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
        // var today = new Date();
        // var dd = String(today.getDate()).padStart(2, "0");
        // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        // var yyyy = today.getFullYear();

        // today = yyyy + "-" + mm + "-" + dd;
        // $("input[type=date]")[0].value = today;
        $("input[type=date]").focusout(function () {
          $("#deadline-select-order").text($("input[type=date]")[0].value);
        });
      }

      $("#" + this.id + " > div:nth-child(2) > p").text(chosenText);
      $("#" + this.id + " > div:nth-child(2) > p").css("color", "#020202");
      $("#" + this.id + "-item > img").removeAttr("style");
      $("#" + this.id + "-item-menu").slideToggle(700);
    }

    // SLIDE DROPDOWN
    $("#" + e.target.id + "-menu").slideToggle(1000);
  });
});

// SELECT FILE
$("#custom-file").change(function () {
  $("#custom-input-file").text(this.files[0].name);
});
