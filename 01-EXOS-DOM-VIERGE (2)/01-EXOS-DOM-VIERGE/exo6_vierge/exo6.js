// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

console.log(mots);

let dl = document.createElement('dl');
for (let i = 0; i < mots.length; i++) {
    console.log (mots[i].terme);
const terme =mots[i].terme;
    let dt = document.createElement('dt');
    dt.textContent = terme
    dt.style.fontWeight = 'bold';
    dl.appendChild(dt);
const definition =mots[i].definition;
    let dd = document.createElement('dd');
    dd.textContent = definition
    dl.appendChild(dd);
}


document.querySelector('#contenu').appendChild(dl);
// for (let iterator of mots) {
//     let dt = document.createElement('dt');

//   console.log(iterator.terme);  
//   console.log(iterator.definition); 
//   let terme =  iterator.terme;
//   dt.textContent = terme;
//   console.log(dt);
   //sdt.appendChild(iterator.terme);
//   dt.appendChild(iterator);

  //dl.appendChild(dt);
  
  

 // console.log(dl);
  








