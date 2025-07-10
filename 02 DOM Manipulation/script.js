// manipulasi dengan innerHTML
// const judul = document.getElementById("judul")
// judul.innerHTML = "<i>Belajar JavaScript</i>"

// const sectionA = document.querySelector("section#a")
// sectionA.innerHTML="<div>Ini telah dimanipulasi menggunakan innerHTML</div>"

// element.style.properticss
const judul = document.querySelector("#judul")
judul.style.color = "white"
// judul.style.backgroundColor = "gray"

// // element.setAttribute
// judul.setAttribute("name", "value")

const p2 = document.querySelector(".p2")
// element.classlist.add()
p2.classList.add("label")
// element.classlist.remove()
p2.classList.remove("label")
// element.classlist.toggle
p2.classList.toggle("juju")
// advanced example for classlist.toggle
const title = document.querySelector("#judul")
title.classList.toggle("judul")
// classlist.item() => untuk mengetahui nama
p2.classList.item(1)