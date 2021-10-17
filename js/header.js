const hamburger_menu = document.querySelector(".hamburger-menuM");
const container = document.querySelector(".containerM");
const links = document.querySelector(".linksM");
const ul = document.querySelector(".linksMUl");
ul.style.display = "none";
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  function myFunction(x) {
    if (x.matches && !container.classList.contains("active")) {
      // If media query matches
      links.style.height = "8vh";
    } else if (container.classList.contains("active")) {
      links.style.height = "100vh";
    } else {
      links.style.height = "14vh";
    }
  }

  if (container.classList.contains("active")) {
    links.style.backgroundColor = "#000";
    // links.style.backgroundImage = "linear-gradient(to right, #16222a, #3a6073)";
    links.style.height = "100vh";
    ul.style.display = "flex";
  } else {
    links.style.backgroundColor = "initial";
    links.style.height = "14vh";
    ul.style.display = "none";
  }
  var x = window.matchMedia("(max-width: 568px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener(myFunction);
});
