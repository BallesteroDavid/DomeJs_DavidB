// manipulation de dom

// grâce à documment. et une function native que vous trouverez sur internet. 
// 1- Vous irez me selectionner l'élément P
// 2- vous vérifirez sur une console.log() votre réussite.
// 3- Dans une console.log() vous afficherez uniquement le contenu de la balise P (c'est-à-dire le texte et uniquement le txt)

// selectionne mon élément html qui porte l'id element

let monElement = document.querySelector("#element");

// un log du contenu de mon element

console.log(monElement);

// un log uniquement du texte contenu dans mon element

console.log(monElement.textContent);

// modifier le text dans l'element qui porte l'id element

monElement.textContent = "Hakuna Matata";

// ajouter la class dark (que vous avez préalablement définie) à l'élément body de votre html. tout ça dans une function darkOrLight

// let bodyElement = document.getElementById("body");
// console.log(bodyElement);

// id darkBtn
// const darkBtn = document.getElementById("darkBtn");
// console.log(darkBtn);
// // id lightBtn
// const lightBtn = document.getElementById("lightBtn");
// console.log(lightBtn);
// let classDark = "dark";


// function dark() {
//     // mon code
//     bodyElement.classList.add(classDark)
// }

// function light() {
//     bodyElement.classList.remove(classDark);
// }

// // au click executer darkOrLight()
// // si on appuie sur darkBtn, dark mode s'active
// darkBtn.addEventListener("click", dark);
// // si on appuie sur lightBtn, light s'active
// lightBtn.addEventListener("click", light);

// problème les deux sont activés au même moment

// correction 

// variable qui contient l'élément html body
// variable qui contient l'élément du body
// const bodyElement = document.getElementById("bodyElement");
// const darkBtn = document.getElementById("darkBtn");
// const lightBtn = document.getElementById("lightBtn");

// ma function pour ajouter la class css dark dans mon élément body

// function darkOrLight() {
    // bodyElement.classList.toggle("dark");
    // "toggle est switch on/off" on n'a plus besoin de light
// }

// function Light() {
    // bodyElement.classList.remove("dark");
// }

// j'initie un écouteur d'évènement sur un élément html btn qui porte l'id darkBtn

// darkBtn.addEventListener("click", darkOrLight);
// lightBtn.addEventListener("click", light);

// donc

const bodyElement = document.getElementById("bodyElement");
const darkBtn = document.getElementById("darkBtn");
let classDark = "dark";

function darkOrLight() {
    bodyElement.classList.toggle("dark");
    // "toggle est un switch on/off" on n'a plus besoin de light
}

darkBtn.addEventListener("click", darkOrLight);
darkOrLight()


