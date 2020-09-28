//PRICING TABLE
$(document).ready(function () {
  $(".priscing__table--heading > p").css("background", "#efefef"); //put grey color to table heading
});

// DATA

// posible writing packeges
const writing = {
  package: [
    {
      duration: "8+ days",
      school: "19.30",
      collage: "20.41",
      master: "21.52",
      // phd: "22.63",
    },
    {
      duration: "6-7 days",
      school: "20.41",
      collage: "21.52",
      master: "22.63",
      // phd: "24.30",
    },
    {
      duration: "4-5 days",
      school: "21.52",
      collage: "22.63",
      master: "24.30",
      // phd: "26.67",
    },
    {
      duration: "3 days",
      school: "22.63",
      collage: "24.30",
      master: "26.67",
      // phd: "29.31",
    },
    {
      duration: "2 days",
      school: "24.30",
      collage: "26.67",
      master: "29.31",
      // phd: "32.67",
    },
    {
      duration: "24 hours",
      school: "26.67",
      collage: "29.31",
      master: "32.67",
      // phd: "34.31",
    },
    {
      duration: "12 hours",
      school: "29.31",
      collage: "32.67",
      master: "34.31",
      // phd: "36.09",
    },
  ],
};

// possible editing packeges
const editing = {
  package: [
    {
      duration: "8+ days",
      school: "19.30",
      collage: "20.41",
      master: "21.52",
      // phd: "22.63",
    },
    {
      duration: "6-7 days",
      school: "20.41",
      collage: "21.52",
      master: "22.63",
      // phd: "24.30",
    },
    {
      duration: "4-5 days",
      school: "21.52",
      collage: "22.63",
      master: "24.30",
      // phd: "26.67",
    },
    {
      duration: "3 days",
      school: "22.63",
      collage: "24.30",
      master: "26.67",
      // phd: "29.31",
    },
  ],
};

// ADD PRICING TABLE ROWS FIRST TIME
window.onload = function () {
  //get table wrapper
  let table = document.querySelector(".pricing__table--container");

  // currency styles
  let spanStyle = "font-family: Muli; font-size: 16px;";

  // posible currency
  const currency = {
    usd: ["$", 1.0],
    gpb: ["&pound;", 1.27],
    aud: ["&#8371;", 0.71],
    eur: ["&euro;", 1.17],
    cad: ["&#36;", 0.75],
  };

  let categoryToggler = document.querySelector(".pricing__category"); //get pricing category block
  let writingButton = document.querySelector(".writing"); //get writing category button
  let editingButton = document.querySelector(".editing"); //get editing category button

  // toggle category
  categoryToggler.addEventListener("click", () => {
    let curEl = document.getElementById("active-currency").classList[1];

    if (writingButton.hasAttribute("id")) {
      //check is it active category

      //change active category
      writingButton.removeAttribute("id");
      editingButton.setAttribute("id", "active-category");

      //change category content
      table.innerHTML = ""; // clear previous content
      for (let i = 0; i < editing.package.length; i++) {
        // insert data after heading one-by-one
        table.insertAdjacentHTML(
          "beforeend",
          `<div class='priscing__table--row' id=${i}><p>${editing.package[i].duration}</p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price school" id=${i}>${editing.package[i].school}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price collage" id=${i}>${editing.package[i].collage}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price master" id=${i}>${editing.package[i].master}</span></p>`
        );
      }
    } else {
      editingButton.removeAttribute("id");
      writingButton.setAttribute("id", "active-category");

      table.innerHTML = "";

      for (let i = 0; i < writing.package.length; i++) {
        // insert data after heading one-by-one while window is loaded
        table.insertAdjacentHTML(
          "beforeend",
          `<div class='priscing__table--row' id=${i}><p>${writing.package[i].duration}</p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price school" id=${i}>${writing.package[i].school}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price collage" id=${i}>${writing.package[i].collage}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price master" id=${i}>${writing.package[i].master}</span></p>`
        );
      }
    }
    //color odd rows
    $(".priscing__table--row:nth-child(2n) > p").css("background", "#FBFBFD");
  });

  // select all currency buttons
  let pricingCurrencyItems = document.querySelectorAll(
    ".pricing__currency--item"
  );

  //add click event listener to all currency buttons
  pricingCurrencyItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.hasAttribute("id")) {
        //change active currency item styles
        let active = document.querySelector("#active-currency");
        active.removeAttribute("id");
        e.target.setAttribute("id", "active-currency");

        // change currency in row
        let currentCurrency = document.querySelectorAll("#current-currency");
        currentCurrency.forEach((item) => {
          item.innerHTML = currency[e.target.classList[1]][0];
        });
        let currentPrice = document.querySelectorAll(".current-price");

        currentPrice.forEach((item) => {
          let schoolPrice =
            Number(writing.package[item.id][item.classList[1]]) *
            Number(currency[e.target.classList[1]][1]);

          item.innerHTML = schoolPrice.toFixed(2);
        });
      }
    });
  });

  for (let i = 0; i < writing.package.length; i++) {
    // insert data after heading one-by-one while window is loaded
    table.insertAdjacentHTML(
      "beforeend",
      `<div class='priscing__table--row' id=${i}><p>${writing.package[i].duration}</p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price school" id=${i}>${writing.package[i].school}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price collage" id=${i}>${writing.package[i].collage}</span></p><p><span id="current-currency" style=${spanStyle}>${currency.usd[0]}</span><span class="current-price master" id=${i}>${writing.package[i].master}</span></p>`
    );
  }

  //color odd rows
  $(".priscing__table--row:nth-child(2n) > p").css("background", "#FBFBFD");
};
