$(document).ready(function () {
  let tagsNavbar = document.querySelector(".blog__navbar");

  tagsNavbar.addEventListener("click", (e) => {
    let galleryItems = document.querySelectorAll(".blog__gallery--item");

    if (e.target.id) {
      if (e.target.classList.contains("active-tag")) {
        e.target.classList.remove("active-tag");

        galleryItems.forEach((item) => {
          if (!item.dataset.tags.includes(e.target.id)) {
            item.style = "display: block;";
          }
        });
      } else {
        e.target.classList.add("active-tag");

        galleryItems.forEach((item) => {
          if (!item.dataset.tags.includes(e.target.id)) {
            item.style = "display: none;";
          }
        });
      }
    }
  });
});
