let a = document.createElement("h1")
console.log(a);
a.textContent = "hello-world"

document.body.appendChild(a)
a.style.backgroundColor = "red"

let div = document.getElementById("demo")
console.log(div);
div.style.border = "5px solid"

let ol = document.createElement("ol")
console.log(ol);

div.appendChild(ol)

let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react"

ol.appendChild(li1)

let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "node.js"

ol.appendChild(li2)

ol.setAttribute("type", "A")



let table = document.createElement("table")
console.log(table);
table.setAttribute("border" , "")

document.body.appendChild(table)

let tr1 = document.createElement("tr")
console.log(tr1);
table.appendChild(tr1)

let td1 = document.createElement("td")
console.log(td1);
td1.textContent = "html"
tr1.appendChild(td1)

let td2 = document.createElement("td")
console.log(td2);
td2.textContent = "html"
tr1.appendChild(td2)

let td3 = document.createElement("td")
console.log(td1);
td3.textContent = "html"
tr1.appendChild(td3)

let td4 = document.createElement("td")
console.log(td4);
td4.textContent = "html"
tr1.appendChild(td4)

let tr2 = document.createElement("tr")
console.log(tr2);
table.appendChild(tr2)

let td5 = document.createElement("td")
console.log(td5);
td5.textContent = "html"
tr2.appendChild(td5)

let td6 = document.createElement("td")
console.log(td6);
td6.textContent = "html"
tr2.appendChild(td6)

let td7 = document.createElement("td")
console.log(td7);
td7.textContent = "html"
tr2.appendChild(td7)

let td8 = document.createElement("td")
console.log(td8);
td8.textContent = "html"
tr2.appendChild(td8)

let td9 = document.createElement("td")
console.log(td9);
td8.textContent = "html"
tr2.appendChild(td9)

let td10 = document.createElement("td")
console.log(td10);
td8.textContent = "html"
tr2.appendChild(td10)

let td11 = document.createElement("td")
console.log(td11);
td8.textContent = "html"
tr2.appendChild(td11)