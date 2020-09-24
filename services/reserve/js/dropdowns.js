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

let totalPrice = {
  service: 0,
  academic: 0,
  pages: 0,
  date: 0,
};

let handler = {
  set(target, key, value) {
    target[key] = value;
  },
  get(target, key) {
    return target[key];
  },
};

let proxy = new Proxy(totalPrice, handler);

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

    if ($("#" + openedItem.id + " > input")) {
      $("#" + openedItem.id + " > input")[0].value = item.textContent;
      console.log($("#" + openedItem.id + " > input")[0].value);
    }

    let category = openedItem.id.split("-", 1);

    let sum = 0;
    proxy[`${category}`] = item.dataset.price;
    for (key in proxy) {
      sum += Number(proxy[key]);
    }

    if (document.querySelector(".total-price-value")) {
      document.querySelector(".total-price-value").innerHTML = sum.toFixed(2);
    }

    $("#" + openedItem.id + "> p").css("color", "#020202");
    $("#" + openedItem.id + "-menu").slideUp(300);

    $("#" + openedItem.id + "> img").removeClass("rotated");
    $(openedItem).removeClass("opened");
  });
});

$("input[type='date']").click(function () {
  $(this).removeClass("placeholderclass");
  $(this).addClass("onfocus");
});

$("#datetimepicker").change(function () {
  $(this).css("color", "rgb(2,2,2)");
});

// 15% discount toggler
if (document.querySelector("#custom")) {
  let discount = 0.0;
  document.querySelector("#custom").addEventListener("click", () => {
    let price = document.querySelector(".total-price-value").textContent;

    if (document.querySelector("#custom").checked) {
      discount = price * 0.15;
      document.querySelector(".total-price-value").innerHTML = (
        Number(price) - discount
      ).toFixed(2);
    } else {
      document.querySelector(".total-price-value").innerHTML = (
        Number(price) + discount
      ).toFixed(2);
    }
  });
}
