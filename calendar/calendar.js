const date = new Date();

const year = date.getFullYear();

document.querySelector(".calendar").insertAdjacentHTML("beforeend", year);
