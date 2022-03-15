




//let liste=document.querySelector('#contenu');
// console.log(liste.clientHeight);
// console.log(liste.clientWidth);
let hauteur= document.body.childNodes[3].clientHeight;
let largeur= document.body.childNodes[3].clientWidth;
let tab= [hauteur, largeur];
let ul= document.createElement('ul');
for (let i = 0; i < tab.length; i++) {
                  tab[i];
    
                  let li= document.createElement('li');
                  li.textContent= tab[i];
                  ul.appendChild(li);
                }
console.log(ul);
document.querySelector('#contenu').appendChild(ul);

