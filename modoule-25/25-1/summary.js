const liall = document.getElementsByTagName("li");

console.log(liall);

const liall2 = document.getElementsByClassName("section-title");
console.log(liall2);

const secondSection = document.getElementById("first-list");

console.log(secondSection);
secondSection.style.color = "pink";

// document.querySelectorAll
// document.querySelector

const secondlist = document.getElementById("second-list");

// add list item
const li = document.createElement("li");

secondlist.appendChild(li);
//

//

const main = document.getElementById("main-container");
const section = document.createElement("section");

section.innerHTML = `

<h1>new add</h1>

<ul>
<li>1</li>
<li>1</li>
<li>1</li>
</ul>

`;
main.appendChild(section);
