// manipulation de dom

// grâce à documment. et une function native que vous trouverez sur internet. 
// 1- Vous irez me selectionner l'élément P
// 2- vous vérifirez sur une console.log() votre réussite.
// 3- Dans une console.log() vous afficherez uniquement le contenu de la balise P (c'est-à-dire le texte et uniquement le txt)

// 1-

document

// 2- 
let texte = document.querySelector("p");

console.log(texte);

let txt = texte.textContent;

console.log(txt);
