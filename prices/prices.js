// CATEGORY TOGGLER
let categoryToggler = document.querySelector(".pricing__category");
let writing = document.querySelector(".writing");
let editing = document.querySelector(".editing");

categoryToggler.addEventListener("click", () => {
  if (writing.hasAttribute("id")) {
    writing.removeAttribute("id");
    editing.setAttribute("id", "active-category");
  } else {
    editing.removeAttribute("id");
    writing.setAttribute("id", "active-category");
  }
});

// CURRENCY TOGGLER
let pricingCurrencyItems = document.querySelectorAll(
  ".pricing__currency--item"
);

pricingCurrencyItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.target.hasAttribute("id")) {
      let active = document.querySelector("#active-currency");
      active.removeAttribute("id");
      e.target.setAttribute("id", "active-currency");
    }
  });
});
