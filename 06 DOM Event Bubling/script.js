// cara dengan DOM Traversal
const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault()
    event.stopPropagation()
  });
});

// const cards = document.querySelectorAll(".card");

// cards.forEach(function (c) {
//   c.addEventListener("click", function (e) {
//     alert("card ditekan")
//   });
// });

// memanfaatkan event bubbling
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className === "close") {
    e.target.parentElement.style.display = "none";
  }
});