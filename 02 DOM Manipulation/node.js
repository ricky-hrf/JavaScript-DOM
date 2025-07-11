// manipulasi node
// 1. document.createElement
const pbaru = document.createElement("p")
// 2. document.createTextNode
const textPbaru = document.createTextNode("ini adalah hasil manipulasi node")
// 3. node.appendChild()
pbaru.appendChild(textPbaru)
const sectionA = document.getElementById("a")
sectionA.appendChild(pbaru)
// 4. node.insertBefore()
const listBaru = document.createElement("li")
const textListBaru = document.createTextNode("Ini list hasil manipulasi dom")
listBaru.appendChild(textListBaru)
const parentNode = document.querySelector("section#b ul")
const childNodeLi2 = document.querySelector("section#b ul li:nth-child(2)");
parentNode.insertBefore(listBaru, childNodeLi2)
// 5. parentNode.removeChild()
const p3 = document.querySelector("section#a .p3")
sectionA.removeChild(p3);

// 6. parentNode.replaceChild()
const sectionB = document.getElementById("b") 
const p4 = sectionB.querySelector("p")

const gantiP4 = document.createElement("h2")
const isiGantiP4 = document.createTextNode("Ganti Paragraf 4 dari manipualasi DOM")
gantiP4.appendChild(isiGantiP4)
// ganti isinya
sectionB.replaceChild(gantiP4,p4) 