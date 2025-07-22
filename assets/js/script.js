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

let bodyElement = document.querySelector("#body");
console.log(bodyElement);

function darkOrLight() {
    // mon code
    let classDark = "dark";
    bodyElement.classList.add(classDark);
}

darkOrLight();



