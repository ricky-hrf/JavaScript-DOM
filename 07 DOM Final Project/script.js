let container = document.querySelector(".container");
let jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (e) {
  if (e.target.className === "thumb") {
    jumbo.src = e.target.src;
  }
});