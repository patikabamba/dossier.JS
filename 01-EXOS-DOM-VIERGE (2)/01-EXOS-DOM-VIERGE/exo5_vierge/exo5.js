// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr", "http://sudouest.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

console.log(journaux);
let ul =document.createElement('ul');

for (let i = 0; i < journaux.length; i++) {

    let li=document.createElement('li');
    let lien=document.createElement('a');
     li.appendChild(lien);
     lien.href=journaux[i];
     lien.textContent=journaux[i];
     ul.appendChild(li)


    }
    
    console.log(ul) ; 
document.querySelector('#contenu').appendChild(ul);
