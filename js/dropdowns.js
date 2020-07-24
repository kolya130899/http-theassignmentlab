$(".form__select-input--menu").hide();

let dropdowns = document.querySelectorAll(".form__select-input");

dropdowns.forEach((item) => {
  // OPEN DROPDOWN
  if (item.id) {
    $(item).click(function () {
      let openedItem = document.querySelector(".opened");

      // OPEN CLICKED DROPDOWN
      if (!this.classList.contains("opened")) {
        $(item).addClass("opened");
        $("#" + item.id + "-menu").slideDown(300);
        $("#" + item.id + "> img").addClass("rotated");
      }

      if (!openedItem) {
        // OPEN DROPDOWN
        $(item).addClass("opened");
        $("#" + item.id + "-menu").slideDown(300);
        $("#" + item.id + "> img").addClass("rotated");
      } else {
        // CLOSE DROPDOWN
        $("#" + openedItem.id + "-menu").slideUp(300);
        $("#" + openedItem.id + "> img").removeClass("rotated");
        $(openedItem).removeClass("opened");
      }
    });
  }
});

//CHANGE DROPDOWN ITEM BACKGROUND ON HOVER
let menuItem = document.querySelectorAll(".form__select-input--menu > p");

menuItem.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.setAttribute("class", "active-menu-item");
  });
  item.addEventListener("mouseout", (e) => {
    e.target.removeAttribute("class");
  });
  item.addEventListener("click", () => {
    let openedItem = document.querySelector(".opened");
    $("#" + openedItem.id + "> p").text(item.textContent);
    $("#" + openedItem.id + "> p").css("color", "#020202");
    $("#" + openedItem.id + "-menu").slideUp(300);

    $("#" + openedItem.id + "> img").removeClass("rotated");
    $(openedItem).removeClass("opened");
  });
});
