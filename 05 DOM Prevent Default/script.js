// // cara biasa
// const closeButtons = document.querySelector(".close")
// const card = document.querySelector(".card")

// closeButtons.addEventListener("click", function () {
//   card.style.display = "none";
// });

// cara dengan DOM Traversal
const closeButtons = document.querySelectorAll(".close");

// for (let i = 0; i < closeButtons.length; i++){
//   closeButtons[i].addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//   });
// }

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault()
  });
});