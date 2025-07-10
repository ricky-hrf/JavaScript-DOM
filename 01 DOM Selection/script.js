// selection menggunakan id

const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "yellow";
judul.style.fontSize = "30px";
judul.innerHTML = "Selamat Datang di DOM Selection";

// selection menggunakan tag
const p = document.getElementsByTagName("p");
// p[0].style.color = "green";
// p[0].style.backgroundColor = "lightblue";
// p[0].style.fontSize = "25px";
// bisa menggunakan loop untuk mengubah semua paragraf
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "green";
  p[i].style.backgroundColor = "gray";
  p[i].style.fontSize = "25px";
}
// selection menggunakan class
const paragraf = document.getElementsByClassName("p1");
paragraf[0].style.color = "red";
paragraf[0].style.backgroundColor = "lightgray";
paragraf[0].style.fontSize = "20px";
paragraf[0].innerHTML = "Paragraf 1 telah diubah";

// selection menggunakan query selector
const para = document.querySelector("#b ul li:nth-child(2)");
para.style.color = "purple";

// selection menggunakan query selector all
const paraAll = document.querySelectorAll("#b ul li");
for (let i = 0; i < paraAll.length; i++) {
  paraAll[i].style.color = "orange";
  paraAll[i].style.backgroundColor = "lightgreen";
  paraAll[i].style.fontSize = "18px";
}