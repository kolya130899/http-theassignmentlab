let orderPriceTab = document.querySelectorAll(".order-form__heading--tab");

orderPriceTab.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!item.hasAttribute("id")) {
      document.querySelector("#active__tab").removeAttribute("id");
      item.setAttribute("id", "active__tab");
    }
  });
});

//CHANGE DROPDOWN ITEM BACKGROUND ON HOVER
let menuItem = document.querySelectorAll(".form__select-input--menu > p");

menuItem.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.setAttribute("style", "background: #FBFBFD;");
  });
  item.addEventListener("mouseout", (e) => {
    e.target.setAttribute("style", "background: #FFF;");
  });
});

//HIDE DROPDOWN
$(".form__select-input--menu").hide();

let selectItems = document.querySelectorAll(".form__select");

selectItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    // ROTATE ARROW
    if (e.target.id && !$("#" + e.target.id + " > img").attr("style")) {
      $("#" + e.target.id + " > img").css("transform", "rotate(180deg)");
    } else if (e.target.id && $("#" + e.target.id + " > img")) {
      $("#" + e.target.id + " > img").removeAttr("style");
    } else {
      // PUT DROPDOWN CHOSE TEXT TO INPUT
      let chosenText = e.target.textContent;
      $("#" + this.id + " > div:nth-child(2) > p").text(chosenText);
      $("#" + this.id + " > div:nth-child(2) > p").css("color", "#020202");
      $("#" + this.id + "-item > img").removeAttr("style");
      $("#" + this.id + "-item-menu").slideToggle(700);
    }

    // SLIDE DROPDOWN
    $("#" + e.target.id + "-menu").slideToggle(1000);
  });
});
