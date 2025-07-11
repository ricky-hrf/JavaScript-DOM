// menggunakan event handler
// const judul = document.querySelector("#judul")
// const p3 = document.querySelector(".p2")
// function UbahWarna() {
//   p3.style.color = "red";
// }
// p3.onclick = UbahWarna;
// judul.onclick = UbahWarna();

// menggunakan addEventListener
const p4 = document.querySelector("section#b p")
p4.addEventListener("click", function () {
  const ul_parent = document.querySelector("section#b ul")
  const liBaru = document.createElement("li")
  const isiLiBaru = document.createTextNode("list baru nih bos")
  liBaru.appendChild(isiLiBaru)
  ul_parent.appendChild(liBaru)
});

// perbedaan eventHandler vs addEventListener
const p3 = document.querySelector(".p3")
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue"
// }
// p3.onclick = function () {
//   p3.style.color = "red"
// }
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "gray"
})
p3.addEventListener("click", function () {
  p3.style.color = "white"
})