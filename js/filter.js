let switcherLi = document.querySelectorAll(".switcher li");
let gallerys = [...document.querySelectorAll(".all")];

switcherLi.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", filter);
});

function removeActive() {
  switcherLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function filter() {
  gallerys.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
