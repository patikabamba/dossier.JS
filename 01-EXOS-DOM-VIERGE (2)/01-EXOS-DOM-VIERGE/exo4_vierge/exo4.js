let paragraphe = document.createElement('p');
let content1_paragraphe=document.createTextNode('En voici une  ');
let lien=document.createElement('a');
lien.href='https://fr.wikipedia.org/wiki/Langage_de_programmation';
lien.textContent='liste'
let content2_paragraphe=document.createTextNode('  plus complete !');
paragraphe.appendChild(content1_paragraphe);
paragraphe.appendChild(lien);
paragraphe.appendChild(content2_paragraphe);
document.querySelector('#contenu').appendChild(paragraphe);

console.log(paragraphe);


console.log(lien);






























































/*let paragraphe= document.createElement('p');

paragraphe.textContent=' En voici une'
paragraphe.appendChild.innerHTML
paragraphe.appendChild.textContent
let lien=document.createElement('a');
lien.href='https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation'
paragraphe.textContent=textContent +'liste'

lien.appendChild.href

paragraphe.appendChild.lien
console.log(paragraphe);*/